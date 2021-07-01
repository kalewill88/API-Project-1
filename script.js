const apiUrl = 'https://catfact.ninja/fact';

// setInterval(getAPI, 3000);

async function getAPI() {
    const response = await fetch(apiUrl);
    const resp = await response.json();
    console.log(resp)
    let count = Object.keys(resp).length;
    // let random = resp[Math.floor(Math.random() * count)].text;
    let random = resp.fact
    document.getElementById('scrollText').innerHTML = random;
}
getAPI()


























