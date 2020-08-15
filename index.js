const express = require("express");
const app = express();
require("dotenv").config();

app.set('view engine', 'pug');
app.use('/public', express.static('public'));

app.get("/", (req, res, next) => {
    res.redirect("/randomgame");
});

app.get("/random_agent", (req, res, next) => {
    const agent_data = require("./public/config/agents.json");
    const random_agent = agent_data.agents[Math.round(Math.random() * (agent_data.agents.length - 1))];
    res.send(random_agent);
});

app.get("/random_map", (req, res, next) => {
    const map_data = require("./public/config/maps.json");
    const random_map = map_data.maps[Math.round(Math.random() * (map_data.maps.length - 1))];
    const random_site = random_map.sites[Math.round(Math.random() * (random_map.sites.length - 1))];
    const random_map_data = {image: random_map.image, id: random_map.id, site: random_site};
    res.send(random_map_data);
});

app.get("/random_weapon", (req, res, next) => {
    const budget = req.query.budget;
    const weapon_data = require("./public/config/weapons.json");
    const budgeted_weapons = weapon_data.weapons.filter(weapon => weapon.cost <= budget);
    const random_weapon = budgeted_weapons[Math.round(Math.random() * (budgeted_weapons.length - 1))];
    res.send(random_weapon);
});

app.get("/randomgame", (req, res, next) => {
    const agent_data = require("./public/config/agents.json");
    const map_data = require("./public/config/maps.json");
    const weapon_data = require("./public/config/weapons.json");

    const first_round_weapons = weapon_data.weapons.filter(weapon => weapon.cost <= 800)

    const random_map = map_data.maps[Math.round(Math.random() * (map_data.maps.length - 1))];
    const random_site = random_map.sites[Math.round(Math.random() * (random_map.sites.length - 1))];
    const random_map_data = {image: random_map.image, id: random_map.id, site: random_site}
    const random_agent = agent_data.agents[Math.round(Math.random() * (agent_data.agents.length - 1))];
    const random_weapon = first_round_weapons[Math.round(Math.random() * (first_round_weapons.length - 1))];
    res.render('random', {map: random_map_data, agent: random_agent, weapon: random_weapon});
});

app.listen(process.env.PORT, () => {
    console.log("SERVER ON LISTENING ON PORT " + process.env.PORT);
});