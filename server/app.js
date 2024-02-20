// Step 3: Create an Express application
const express = require("express");
const app = express();

// Step 4: Define routes for the API
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Step 5: Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
