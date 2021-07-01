const apiUrl = 'https://cat-fact.herokuapp.com/facts';

setInterval(getAPI, 3000);

async function getAPI() {
    const response = await fetch(apiUrl);
    const resp = await response.json();
    let count = Object.keys(resp).length;
    let random = resp[Math.floor(Math.random() * count)].text;
    document.getElementById('scrollText').innerHTML = random;
}


























