const express = require("express");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.get("/", (req, res, next) => {
    res.render("index");
});

app.get("/agents", (req, res, next) => {
    
})

app.listen(process.env.PORT, () => {
    console.log("SERVER ON LISTENING ON PORT " + process.env.PORT);
});