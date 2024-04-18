const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:8000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount route files
app.use("/api", apiRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://jmprudentevaldez:jmprudentevaldez@maincluster.ks7vkaw.mongodb.net/testdb"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
