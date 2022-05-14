const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());

app.listen(5001, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("The server is running on port 5001");
  }
})

app.get("/pokemons", (req, res) => {
  res.sendFile(__dirname + "/json/pokemons.json");
})

app.get("/pokemon/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(`${__dirname}/json/pokemon/${id}.json`);
})

app.get("/type/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(`${__dirname}/json/type/${id}.json`);
})

app.get("/region/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(`${__dirname}/json/region/${id}.json`);
})
