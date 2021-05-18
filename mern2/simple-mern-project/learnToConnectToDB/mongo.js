const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://mongo:password00@cluster0.cm4ce.mongodb.net/products_test?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (err) {
    return res.json({ message: "There was an error in the database" });
  }

  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (err) {
    return res.json({ message: "Problem at the database" });
  }
  client.close();

  res.json({ products });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
