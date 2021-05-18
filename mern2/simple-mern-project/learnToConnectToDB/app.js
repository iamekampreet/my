const express = require("express");
const bodyParser = require("body-parser");

// const mongoPractise = require("./mongo");
const mongoosePractise = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/products", mongoosePractise.createProduct);

app.get("/products", mongoosePractise.getProducts);

app.listen(5000);
