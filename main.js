const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    for (f = 0; f < 16; f++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.textContent = "Testing";
        container.appendChild(grid);
    }
}


