/* ANIMAL CLASS */

class Dog {
    constructor(petName) {
        this.petName = petName;

        // Starting Values
        this.needsFeed = 5;
        this.needsDrink = 5;
        this.needsWalk = 5;
        this.needsPlay = 5;
        this.needsLoo = 5;

        /* Values set in subclass */
        this.feedThreshold;
        this.drinkThreshold;
        this.walkThreshold;
        this.playThreshold;
        this.looThreshold;
    }

    dogNeeds() {
        this.needsFeed += Math.ceil(Math.random() * 10);
        this.needsDrink += Math.ceil(Math.random() * 10);
        this.needsWalk += Math.ceil(Math.random() * 10);
        this.needsPlay += Math.ceil(Math.random() * 10);
        this.needsLoo += Math.ceil(Math.random() * 10);
    }

    matchChoice(action) {
        switch (action) {
            case "feedAction":
                if (this.needsFeed > 10) {
                    this.needsFeed = 0;
                    petFeedback.textContent = `\n${this.petName} munches on the food :)`;
                } else {
                    petFeedback.textContent = `\n${this.petName} isn't hungry.`;
                }
                break;
            case "drinkAction":
                if (this.needsDrink > 10) {
                    this.needsDrink = 0;
                    petFeedback.textContent = `\n${this.petName} slurps from the water bowl :)`;
                } else {
                    petFeedback.textContent = `\n${this.petName} isn't thirsty.`;
                }
                break;
            case "walkAction":
                if (this.needsWalk > 10) {
                    this.needsWalk = 0;
                    petFeedback.textContent = `\n${this.petName} loves a good walk :)`;
                } else {
                    petFeedback.textContent = `\n${this.petName} doesn't want to go out.`;
                }
                break;
            case "petAction":
                if (this.needsPlay > 10) {
                    this.needsPlay = 0;
                    petFeedback.textContent = `\n${this.petName} jumps around for joy :)`;
                } else {
                    petFeedback.textContent = `\n${this.petName} doesn't feel like playing.`;
                }
                break;
            case "looAction":
                if (this.needsLoo > 10) {
                    this.needsLoo = 0;
                    petFeedback.textContent = `\n${this.petName} answers the call of nature :)`;
                } else {
                    petFeedback.textContent = `\n${this.petName} doesn't need a comfort break.`;
                }
                break;
            default:
                console.log("Error - no action selected");
        }
    }

    healthCheck() {
        if (this.needsLoo > this.looThreshold) {
            petFeedback.textContent = `\n${this.petName} has had an accident in the kitchen :(`;
            this.needsLoo = 0;
        }
        if (this.needsFeed > this.feedThreshold) {
            petFeedback.textContent = `\n${this.petName} is looking thin and has started raiding the local bins :(`;
        }
        if (this.needsDrink > this.drinkThreshold) {
            petFeedback.textContent = `\n${this.petName} is looking ill and has awful smelling breath :(`;
        }
        if (this.needsWalk > this.walkThreshold) {
            petFeedback.textContent = `\n${this.petName} is looking depressed and sullen :(`;
        }
        if (this.needsPlay > this.playThreshold) {
            petFeedback.textContent = `\n${this.petName} is eyeing you with contempt :(`;
        }
    }
}

class JackRussell extends Dog {
    constructor(petName) {
        super(petName);
        this.feedThreshold = 50;
        this.drinkThreshold = 50;
        this.walkThreshold = 25;
        this.playThreshold = 25;
        this.looThreshold = 40;
    }
}

class GreatDane extends Dog {
    constructor(petName) {
        super(petName);
        this.feedThreshold = 25;
        this.drinkThreshold = 30;
        this.walkThreshold = 30;
        this.playThreshold = 50;
        this.looThreshold = 35;
    }
}

class Staffy extends Dog {
    constructor(petName) {
        super(petName);
        this.feedThreshold = 35;
        this.drinkThreshold = 40;
        this.walkThreshold = 25;
        this.playThreshold = 40;
        this.looThreshold = 35;
    }
}

let selectedDog = null;
let dog;

/* Testing parameters */
let turnCount = 0;
let testing = false;

const selectPetScreen = document.getElementById("selectPet");
const inGameScreen = document.getElementById("inGame");
const selectDogButton = document.getElementById("selectDogButton");

const selectionFeedback = document.getElementById("selectionFeedback");
const petFeedback = document.getElementById("petFeedback");

const selectionButtons = document.getElementsByClassName("dogSelection");
const actionButtons = document.getElementsByClassName("action");

/* SET "IN GAME" SCREEN TO BE HIDDEN INITIALLY */

inGameScreen.style.display = "none";

/* SELECT DOG SCREEN */

selectionFeedback.textContent = "Please select a dog";

for (let i = 0; i < selectionButtons.length; i++) {
    selectionButtons[i].addEventListener("click", () => {
        selectedDog = selectionButtons[i].id;
        clearDogSelectionHighlight();
        selectionButtons[i].classList.add("selected");
        setSelectButtonValid(true);
        displaySelectionFeedback();
    });
};

selectDogButton.addEventListener("click", () => {
    if (selectedDog == null) {
        selectionFeedback.textContent = "Please select a dog";
    } else {
        selectDog();
        updateName();
        selectPetScreen.style.display = "none";
        inGameScreen.style.display = "block";
    }
});

/* IN GAME SCREEN */

for (let i = 0; i < actionButtons.length; i++) {
    actionButtons[i].addEventListener("click", () => {
        processTurn(actionButtons[i].id);
    });
};

const displaySelectionFeedback = () => {
    selectionFeedback.classList.remove("hidden");
    if (selectedDog == "jackRussell") {
        selectionFeedback.textContent =  "Do you want to select a Jack Russell?"
    }
    else if (selectedDog == "greatDane") {
        selectionFeedback.textContent = "Do you want to select a Great Dane?"
    }
    else if (selectedDog == "staffy") {
        selectionFeedback.textContent = "Do you want to select a Staffy?"
    }
    else {
        selectionFeedback.textContent = "Please select a dog"
    }
}

const selectDog = () => {
    if (selectedDog == "jackRussell") {
        dog = new JackRussell("Spot");
    }
    else if (selectedDog == "greatDane") {
        dog = new GreatDane("Fido");
    }
    else if (selectedDog == "staffy") {
        dog = new Staffy("Buster");
    }
    else {
        dog = new Dog("Pochi");
    }
    console.log(dog);
}

const processTurn = (action) => {
    if (testing) {
        console.log(`START TURN ${turnCount}: ${action}`)
        printStats();
    }

    dog.dogNeeds();
    dog.matchChoice(action);
    dog.healthCheck();
    
    if (testing) {
        console.log(`END TURN ${turnCount}: ${action}`)
        printStats();
    }
}

const printStats = () => {
    console.log();
    console.log(`Feed: ${dog.needsFeed} / ${dog.feedThreshold}`);
    console.log(`Drink: ${dog.needsDrink} / ${dog.drinkThreshold}`);
    console.log(`Walk: ${dog.needsWalk} / ${dog.walkThreshold}`);
    console.log(`Play: ${dog.needsPlay} / ${dog.playThreshold}`);
    console.log(`Loo: ${dog.needsLoo} / ${dog.looThreshold}`);
}

const updateName = () => {
    petFeedback.innerHTML = `<p>${dog.petName} looks content</p>`
    document.getElementById("feedAction").textContent = `Feed ${dog.petName}`;
    document.getElementById("drinkAction").textContent = `Give ${dog.petName} a Drink`;
    document.getElementById("walkAction").textContent = `Take ${dog.petName} for a Walk`;
    document.getElementById("petAction").textContent = `Play with ${dog.petName}`;
    document.getElementById("looAction").textContent = `Let ${dog.petName} Answer Nature's Call`;
}

function setSelectButtonValid(valid) {
    if (valid) {
        selectDogButton.classList.remove("dogChooseInvalid");
        selectDogButton.classList.add("dogChooseValid");
    } else {
        selectDogButton.classList.remove("dogChooseValid");
        selectDogButton.classList.add("dogChooseInvalid");
    }
}

const clearDogSelectionHighlight = () => {
    for(let i = 0; i < selectionButtons.length; i++) {
        selectionButtons[i].classList.remove("selected");

    }
}
