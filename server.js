const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes")
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs


app.use(routes);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Capstone");
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});