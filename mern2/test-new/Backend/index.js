const express = require("express");

const UsersRoutes = require("./Routes/UsersRoutes");
const PostsRoutes = require("./Routes/PostsRoutes");

const app = express();

// // CORS
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With, content-type, authenticate"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", UsersRoutes);
app.use("/api/posts", PostsRoutes);

app.use((req, res, next) => {
  console.log("Link not found, 404");
  res
    .status(404)
    .json({ message: "The link you had requested could not be found" });
  res.end();
});

app.use((err, req, res, next) => {
  // console.error(err.stack);
  res.status(err.status).json({ message: err.message });
});

app.listen(5000, () => {
  console.log("Server Started");
});
