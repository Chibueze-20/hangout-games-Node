const express = require("express");
var cors = require("cors");

const app = express();

app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())
// //set static folders to enable direct reading and
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/files"));
const Controller = require("./hangout.controller");
app.use("/app",Controller);

app.listen(9050, () => console.log("server running on port 9050."));