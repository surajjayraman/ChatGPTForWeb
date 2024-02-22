const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const housingData = require("./data.json");
const { sortedData } = require("./quickSort");
const { OpenAIApi } = require("openai");

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

app.use(express.json()); // for parsing application/json
app.use(cors());
app.use(morgan("dev"));

// Set EJS as the view engine
app.set("view engine", "ejs");

let items = []; // This will act as our simple database for todo items
// console.log("housingData", housingData);
// console.log("sortedData", sortedData(housingData, "price"));

// Create a new item
app.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    ...req.body,
  };
  items.push(item);
  res.status(201).send(item);
});

// default route handler
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// sort housing data by price
app.get("/data", (req, res) => {
  res.render("data", { housingData: sortedData(housingData, "price") });
  // res.send(sortedData(housingData, "price"));
});

// Add open AI chat interface
// POST request endpoint
app.post("/ask", async (req, res) => {
  // getting prompt question from request
  const prompt = req.body.prompt;

  try {
    if (prompt === null) {
      throw new Error("Uh oh, no prompt was provided");
    }
    // return the result
    return res.status(200).json({
      success: true,
      message: prompt,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Get all items
app.get("/items", (req, res) => {
  res.send(items);
});

// Get a specific item by id
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const item = items.find((i) => i["id"] === parseInt(id));

  if (!item) {
    return res.status(404).send("Item not found");
  }
  res.send(item);
});

// Update a specific item by id
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex((i) => i.id === parseInt(id));
  if (itemIndex === -1) {
    return res.status(404).send("Item not found");
  }
  const updatedItem = { ...items[itemIndex], ...req.body };
  items[itemIndex] = updatedItem;
  res.send(updatedItem);
});

// Delete a specific item by id
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  const itemIndex = items.findIndex((i) => i.id === parseInt(id));
  if (itemIndex === -1) {
    return res.status(404).send("Item not found");
  }
  const deletedItem = items.splice(itemIndex, 1);
  res.send(deletedItem);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
