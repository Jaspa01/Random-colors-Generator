const containerVal = document.querySelector(".container2");

for (let i = 0; i < 12; i++) {
    const colorContainerVal = document.createElement("div");
    colorContainerVal.classList.add("color-container");
    containerVal.appendChild(colorContainerVal);

}

const colorContainerVals = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
    colorContainerVals.forEach((colorContainerVal) => {
        const newColorCode = randomColor();
        colorContainerVal.style.backgroundColor = "#" + newColorCode;
        colorContainerVal.innerText = "#" + newColorCode;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
