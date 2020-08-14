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
    const agent_data = require("./public/config/agents.json");
    const random_agent = agent_data.agents[Math.round(Math.random() * (agent_data.agents.length - 1))];
    res.render('agents', {agents: agent_data});
});

app.get("/maps", (req, res, next) => {
    const map_data = require("./public/config/maps.json");
    const random_map = map_data.maps[Math.round(Math.random() * (map_data.maps.length - 1))];
    res.render('random', {image: random_map.image, name: random_map.id.toUpperCase()});
});

app.get("/weapons", (req, res, next) => {
    const weapon_data = require("./public/config/weapons.json");
    const random_weapon = weapon_data.weapons[Math.round(Math.random() * (weapon_data.weapons.length - 1))];
    res.render('random', {image: random_weapon.image, name: random_weapon.id.toUpperCase()});
});

app.listen(process.env.PORT, () => {
    console.log("SERVER ON LISTENING ON PORT " + process.env.PORT);
});