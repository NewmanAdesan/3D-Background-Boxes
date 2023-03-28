let boxesContainer = document.getElementById("boxes");
let magicButton = document.getElementById("btn");

magicButton.addEventListener('click', () => {
    boxesContainer.classList.toggle("big");
})