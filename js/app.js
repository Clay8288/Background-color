// we create variable countaint letters for the colors for example f15025
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// we take a bouton
const btn = document.getElementById("btn");

// we take the class color for change color
const color = document.querySelector(".color");

// we listen the button
btn.addEventListener("click", function() {
    //we add de hastag for the random color
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}