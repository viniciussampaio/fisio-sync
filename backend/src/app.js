const express = require("express");
const routeSchedules = require("./routes/schedules");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routeSchedules);

module.exports = app;

