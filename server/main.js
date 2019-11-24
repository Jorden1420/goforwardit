const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
var fs = require("fs");
const router = express.Router();

var filePath = path.join(__dirname + "/../build/index.html");

const app = express();

//app.use(compression());
app.use(cors());
// Body Parser Middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve static files on server
app.use(express.static(__dirname + "/../build"));

app.listen(5000, () => {
  console.log(`Server successfully started`);
});
