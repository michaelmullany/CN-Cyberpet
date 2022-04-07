const selectPetScreen = document.getElementById("selectPet");
const inGameScreen = document.getElementById("inGame");
const selectDogButton = document.getElementById("selectDogButton");

const testText = document.getElementById("testText");
const petFeedback = document.getElementById("petFeedback");

const selectionButtons = document.getElementsByClassName("dogSelection");
const actionButtons = document.getElementsByClassName("action");

inGameScreen.style.display = "none";

/* SELECT DOG SCREEN */

for (let i = 0; i < selectionButtons.length; i++) {
    selectionButtons[i].addEventListener("click", () => {
        testText.textContent = selectionButtons[i].id;
    });
};

selectDogButton.addEventListener("click", () => {
    selectPetScreen.style.display = "none";
    inGameScreen.style.display = "block";
});

/* IN GAME SCREEN */

for (let i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener("click", () => {
        petFeedback.textContent = actionButtons[i].id;
    });
};