console.log("hellow");
const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const port = 5000;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: "*" }));
const mongostring = process.env.DATABASE_URL;
const Dtabase = mongoose.connection;
mongoose.connect(mongostring);

app.get("/", (req, res) => {
  res.send("hellow");
});

try {
  Dtabase.on("error", (error) => {
    console.log(error);
  });

  Dtabase.once("connected", () => {
    console.log("database connected");
  });
} catch (error) {
  console.log("error in databaseconnection", error);
}

const Post_Controller = require("./Controllers/Post_Controller");
app.use("/admin", Post_Controller);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
