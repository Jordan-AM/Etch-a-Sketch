// Select elements
const intro = document.querySelector("#intro");
const sketch = document.querySelector("#sketch");
const resolutionBtns = document.querySelector(".resolutions");

function resolutionChoice(event) {
  const resolutionChoice = parseInt(event.target.id);
  return resolutionChoice;
}



resolutionBtns.addEventListener("click", (event) => {
  console.log(resolutionChoice(event));
  intro.style.display = "none";
  console.log(intro.style.display)
  sketch.style.display = "flex"
  console.log(sketch.style.display)  
});
