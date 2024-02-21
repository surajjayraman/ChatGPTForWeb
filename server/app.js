const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json

let items = []; // This will act as our simple database

// Create a new item
app.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    ...req.body,
  };
  items.push(item);
  res.status(201).send(item);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
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
  const itemIndex = items.findIndex((i) => i.id === id);
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
  const itemIndex = items.findIndex((i) => i.id === id);
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