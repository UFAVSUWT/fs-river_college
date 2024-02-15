require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleWare/ErrorHandlingMiddleWare");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client")));

  const indexPath = path.join(__dirname, "client", "index.html");

  app.get("*", (req, res) => {
    res.sendFile(indexPath);
  });
}

//Обработка ошибок, идет последним
app.use(errorHandler);
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
