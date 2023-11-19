require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cors = require("cors");
const path = require("path");
const { fileURLToPath } = require("url");
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const authRouter = require("./routes/auth");
const players = require("./routes/routes");

app.use("/auth", authRouter);
app.use("", players);
app.use(errorHandlerMiddleware);

app.use(express.static(path.join(__dirname, "./build")));

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, function () {
      console.log(`server started  at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
