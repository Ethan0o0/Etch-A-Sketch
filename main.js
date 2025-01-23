const container = document.querySelector(".container");

const grid_px_size = 500;

function makeGrid(grid_size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

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

const slider = document.querySelector(".slider");
const slider_num = document.querySelector(".grid_num");

slider.addEventListener("input", function() {
    slider_num.textContent = slider.value;
    makeGrid(slider.value);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const rgb = document.querySelector(".rgb");
let rgb_boolean;
rgb.addEventListener("click", function() {
    rgb_boolean = true;
})

container.addEventListener("mouseenter", function() {
    const grids = document.querySelectorAll(".grid");

    grids.forEach((grid) => {
        grid.addEventListener("mouseenter", function() {
            if (rgb_boolean) {
                grid.style.backgroundColor = getRandomColor();
            }
            else {
                grid.style.backgroundColor = "gray";
            }
        })
    })
})
