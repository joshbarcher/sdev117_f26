
window.onload = () => {
    //select the button to load the cat image
    const btn = document.querySelector("#load-btn");
    btn.onclick = async () => {
        //send a request to the cat (or dog api)
        const url = "https://api.thecatapi.com/v1/images/search?limit=8";
        const config = {
            method: "get",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }

        //fetch returns a promise object (which promises to report when
        //it finishes - by calling the "callback function")
        const res = await fetch(url, config);
        const json = await res.json()
        loadCatImage(json);

        // fetch(url, config)
        //     .then(getResponse)
        //     .then(loadCatImage)
    }
}

// function getResponse(response) {
//     //convert the body of the http response to JSON
//     return response.json();
// }

function loadCatImage(json) {
    //loop over all cat records, and add an <img> element for all of them
    const divArea = document.querySelector("#img-area")

    //clears the HTML in the div area
    divArea.innerHTML = "";

    for (const catRecord of json) {
        const url = catRecord.url;

        const img = document.createElement("img");
        img.style.display = "block"; //show the <img> element
        img.src = url;

        divArea.appendChild(img);
    }
}