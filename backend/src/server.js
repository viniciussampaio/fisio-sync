const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`server running in ${port}`));

