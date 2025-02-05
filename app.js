const express = require("express");
const app = express();
require("dotenv").config({});
const data = require("./data.js");
const cors = require("cors");

app.use(cors())

app.get("/test", (req, res) => {
    res.send("Workig");
});

app.get("/", (req, res) => {
    res.json(data);
});

app.listen(process.env.PORT, () => {
    console.log("App is litening on port ", 8080);
});