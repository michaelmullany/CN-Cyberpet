const selectPetScreen = document.getElementById("selectPet");
const inGameScreen = document.getElementById("inGame");
const selectDogButton = document.getElementById("selectDogButton");

inGameScreen.style.display = "none";

selectDogButton.addEventListener("click", () => {
    console.log("Button Clicked");
    selectPetScreen.style.display = "none";
    inGameScreen.style.display = "block";
});

console.log(selectPetScreen);
console.log(inGameScreen);
console.log(selectDogButton);
