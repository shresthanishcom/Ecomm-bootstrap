const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const crud = require("./Routes/crud_routes.js");
const product = require("./Routes/product_routes");

const app = express();

mongoose.connect("mongodb://localhost/crud", { useNewUrlParser: true });
const con = mongoose.connection;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/crud", crud);
app.use("/product", product);

app.listen(5000, () => {
  console.log("listening in port 5000");
  con.on("open", () => {
    console.log("mongo connected ");
  });
});
