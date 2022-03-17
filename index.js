const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const routerApi = require("./routes");

app.listen(port, () => {
  console.log("active port", port);
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Success conection with Mongo");
  })
  .catch((error) => console.log(error));

app.use(express.json());

routerApi(app);
