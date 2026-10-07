
let area = document.querySelector("#entities-list");

//loop over the first html entities
for (let i = 1; i <= 10000; i++) {
    //entities format is &#39;
    let entity = `&#${i}; `;

    area.innerHTML += entity;
}
