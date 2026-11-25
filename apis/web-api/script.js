
window.onload = () => {
    //select the button to load the cat image
    const btn = document.querySelector("#load-btn");
    btn.onclick = () => {
        //send a request to the cat (or dog api)
        const url = "https://api.thecatapi.com/v1/images/search";
        const config = {
            method: "get",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581e5cb09"
        }

        //fetch returns a promise object (which promises to report when
        //it finishes - by calling the "callback function")
        fetch(url, config)
            .then(getResponse)
            .then(loadCatImage)
    }
}

function getResponse(response) {
    //convert the body of the http response to JSON
    return response.json();
}

function loadCatImage(json) {
    //get the URL from the json (in a single object array)
    const url = json[0].url;

    //update the img on the page
    const img = document.querySelector("#cat-img");
    img.style.display = "block"; //show the <img> element
    img.src = url;
}