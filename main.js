const container = document.querySelector(".container");

const grid_px_size = 500;

function makeGrid(grid_size) {
    const width = grid_px_size / grid_size;
    for (i = 0; i < parseInt(grid_size); i++) {
        for (f = 0; f < parseInt(grid_size); f++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            container.appendChild(grid);
        }
    }
    container.style.gridTemplateColumns = `repeat(${grid_size}, ${width}px)`
}

makeGrid(16);

const button = document.querySelector(".button-main");

button.addEventListener("click", function() {
    let grid_size = prompt("Please enter a grid size");
    if (grid_size < 0 || grid_size > 100) {
        grid_size = 0;
    };
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
    makeGrid(grid_size);
});

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
    grid.addEventListener("mouseenter", function() {
        grid.style.backgroundColor = "gray";
    })
})
