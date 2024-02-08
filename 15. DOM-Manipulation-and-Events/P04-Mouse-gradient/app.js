function attachGradientEvents() {
  const gradientElement = document.getElementById("gradient");
  const resultElement = document.getElementById("result");

  gradientElement.addEventListener("mousemove", function (event) {
    const mouseX = event.offsetX; // Get the mouse X-coordinate relative to the gradient element
    const percentage = (mouseX / gradientElement.clientWidth) * 100;

    resultElement.textContent = Math.floor(percentage) + "%";
  });
}
