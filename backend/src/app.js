const express = require("express");
const routeSchedules = require("./routes/schedules");

const app = express();

app.use(express.json());
app.use(routeSchedules);

module.exports = app;

