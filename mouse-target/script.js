
window.onload = () => {
    const container = document.querySelector("#container");
    const position = document.querySelector("#position");
    const img = document.querySelector("img");

    img.onclick = () => {
        const size = 600;
        const randomX = Math.random() * size;
        const randomY = Math.random() * size;

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;
    }

    container.onmousemove = (evt) => {
        const x = evt.clientX;
        const y = evt.clientY;
    
        position.innerHTML = `(${x}, ${y})`;
    }
};