const selectPetScreen = document.getElementById("selectPet");
const inGameScreen = document.getElementById("inGame");
const selectDogButton = document.getElementById("selectDogButton");

const petFeedback = document.getElementById("petFeedback");
const actionButtons = document.getElementsByClassName("action");

inGameScreen.style.display = "none";

selectDogButton.addEventListener("click", () => {
    selectPetScreen.style.display = "none";
    inGameScreen.style.display = "block";
});

for (let i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener("click", () => {
        petFeedback.textContent = actionButtons[i].id;
    });
};