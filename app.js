require("dotenv").config({ path: './config.env' });
const path = require("path");
const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const books = require("./routes/api/books");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
// use Routes
app.use("/api/books", books);



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/my-app/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "my-app", "build", "index.html"));
    console.log(process.env.NODE_ENV);

  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is run");
  });
}
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
