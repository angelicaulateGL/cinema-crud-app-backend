const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movie.model.js");
const movieRoute = require("./routes/movie.route.js");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = 3000;

//routes
app.use("/api/movies", movieRoute);

//  Data base connection
mongoose
  .connect(
    "mongodb+srv://anmongo:anmongo@cluster0.rgj0h.mongodb.net/cinema?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to the DB!");
    app.listen(port, () => {
      console.log("servidor a su servicio en el puerto", port);
    });
  })
  .catch((e) => console.log("ERROR", e));
