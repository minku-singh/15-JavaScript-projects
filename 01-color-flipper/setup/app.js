const colors = ["green", "red", "green", "yellow", "orange", "pink", "purple", "gray", "crimson", "blue", "sky"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

const getRandomNumber = () => {
    return Math.floor(Math.random()*(colors.length));
}

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})