if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");

// start connect to db
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
// end connect to db
const app = express();
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3000");
});
