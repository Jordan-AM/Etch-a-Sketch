// DOM Elements
const canvas = document.querySelector("#canvas");
const resolutionBtns = document.querySelector(".resolutions");
const clearBtn = document.querySelector("#clearBtn");
const colorInput = document.querySelector("#colorInput");

let currentColor = colorInput.value;

// Functions
function createPixel(size) {
  const pixel = document.createElement("div");
  pixel.style.width = `${size}px`;
  pixel.style.height = `${size}px`;
  pixel.style.border = "1px solid rgba(20, 20, 20, 0.5)";
  pixel.style.backgroundColor = "white";

  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = currentColor;
  });

  return pixel;
}

function clearCanvas() {
  const pixels = canvas.querySelectorAll("div");
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = "white";
  });
}

function generateGrid(resolution) {
  canvas.innerHTML = "";

  const pixelSize = 512 / resolution;

  for (let i = 0; i < resolution * resolution; i++) {
    const pixel = createPixel(pixelSize);
    canvas.appendChild(pixel);
  }
}

function handleResolutionClick(event) {
  const resolution = parseInt(event.target.dataset.resolution);
  if (!isNaN(resolution)) {
    generateGrid(resolution);
  }
}

function handleColorChange(event) {
  currentColor = event.target.value;
}

// Event Listeners
resolutionBtns.addEventListener("click", handleResolutionClick);
clearBtn.addEventListener("click", clearCanvas);
colorInput.addEventListener("input", handleColorChange);
