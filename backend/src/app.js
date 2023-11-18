const express = require("express");
const routeSchedules = require("./routes/schedules");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
const app = express();

app.use(cors());
app.use(express.json());
app.use(routeSchedules);

module.exports = app;

