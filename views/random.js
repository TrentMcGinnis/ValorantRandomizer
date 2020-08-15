async function reroll(id) {
    let data = null;
    let respone = null;
    switch (id) {
        case "map":
            response = await fetch("/random_map");
            data = await response.json();
            document.getElementById('map_image').src = data.image;
            document.getElementById('map_id').innerText = data.id;
            document.getElementById('map_site').innerText = "Start the game on side " + data.site;
            break;
        case "agent":
            response = await fetch("/random_agent");
            data = await response.json();
            document.getElementById('agent_image').src = data.image;
            document.getElementById('agent_id').innerText = data.id;
            break;
        case "weapon":
        default:
            const budget_number = document.getElementById('budget').value;
            response = await fetch("/random_weapon" + "?budget=" + budget_number);
            data = await response.json();
            document.getElementById('weapon_image').src = data.image;
            document.getElementById('weapon_id').innerText = data.id;
            break;
    }

}
