class Dog {
    constructor(petName) {
        this.petName = petName;
        this.choice = 0;

        this.needsFeed = 5;
        this.needsDrink = 5;
        this.needsWalk = 5;
        this.needsPlay = 5;
        this.needsLoo = 5;

        this.feedThreshold;
        this.drinkThreshold;
        this.walkThreshold;
        this.playThreshold;
        this.looThreshold;
    }

    dogLoop() {
        while (true) {
            this.dogNeeds();
            this.ownerOutput();
            this.ownerInput();
            this.matchChoice();
            /* TESTING ONLY */
            //  this.printStats();
            this.healthCheck();
        }
    }

    dogNeeds() {
        this.needsFeed += Math.ceil(Math.random() * 10);
        this.needsDrink += Math.ceil(Math.random() * 10);
        this.needsWalk += Math.ceil(Math.random() * 10);
        this.needsPlay += Math.ceil(Math.random() * 10);
        this.needsLoo += Math.ceil(Math.random() * 10);
    }

    ownerOutput() {
        const options = `
1. Feed ${this.petName}
2. Give ${this.petName} a drink
3. Take ${this.petName} for a walk
4. Play with ${this.petName}
5. Let ${this.petName} answer nature's call
        `;
        console.log(options);
    }

    ownerInput() {
        this.choice = prompt("Please enter a number from 1 to 5 : ");
    }

    matchChoice() {
        switch (this.choice) {
            case "1":
                if (this.needsFeed > 10) {
                    this.needsFeed = 0;
                    console.log(`\n${this.petName} munches on the food :)`);
                } else {
                    console.log(`\n${this.petName} isn't hungry.`);
                }
                break;
            case "2":
                if (this.needsDrink > 10) {
                    this.needsDrink = 0;
                    console.log(`\n${this.petName} slurps from the water bowl :)`);
                } else {
                    console.log(`\n${this.petName} isn't thirsty.`);
                }
                break;
            case "3":
                if (this.needsWalk > 10) {
                    this.needsWalk = 0;
                    console.log(`\n${this.petName} loves a good walk :)`);
                } else {
                    console.log(`\n${this.petName} doesn't want to go out.`);
                }
                break;
            case "4":
                if (this.needsPlay > 10) {
                    this.needsPlay = 0;
                    console.log(`\n${this.petName} jumps around for joy :)`);
                } else {
                    console.log(`\n${this.petName} doesn't feel like playing.`);
                }
                break;
            case "5":
                if (this.needsLoo > 10) {
                    this.needsLoo = 0;
                    console.log(`\n${this.petName} answers the call of nature :)`);
                } else {
                    console.log(`\n${this.petName} doesn't need a comfort break.`);
                }
                break;
        }
    }

    /* 
    PRINT STATS - FOR TESTING ONLY

    printStats() {
        console.log();
        console.log(`Feed: ${this.needsFeed} / ${this.feedThreshold}`);
        console.log(`Drink: ${this.needsDrink} / ${this.drinkThreshold}`);
        console.log(`Walk: ${this.needsWalk} / ${this.walkThreshold}`);
        console.log(`Play: ${this.needsPlay} / ${this.playThreshold}`);
        console.log(`Loo: ${this.needsLoo} / ${this.looThreshold}`);
    }
    */

    healthCheck() {
        if (this.needsLoo > this.looThreshold) {
            console.log(`\n${this.petName} has had an accident in the kitchen :(`);

            this.needsLoo = 0;
        }
        if (this.needsFeed > this.feedThreshold) {
            console.log(`\n${this.petName} is looking thin and has started raiding the local bins :(`);
        }
        if (this.needsDrink > this.drinkThreshold) {
            console.log(`\n${this.petName} is looking ill and has awful smelling breath :(`);
        }
        if (this.needsWalk > this.walkThreshold) {
            console.log(`\n${this.petName} is looking depressed and sullen :(`);
        }
        if (this.needsPlay > this.playThreshold) {
            console.log(`\n${this.petName} is eyeing you with contempt :(`);
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

const prompt = require('prompt-sync')({ sigint: true });

const fido = new Dog("Fido");
const spot = new JackRussell("Spot");
const buster = new Dog("Buster");

let validChoice = false;

while (!validChoice) {
    console.log(`
WELCOME TO YOUR CODE NATION CYBER PET.

Choose your character...

1. Spot the Jack Russell
2. Fido the Great Dane
3. Buster the Staffy
`);

    let chooseCharacter = prompt("Please enter a digit from 1 to 3 : ");
    switch (chooseCharacter) {
        case "1":
            validChoice = true;
            spot.dogLoop();
            break;
        case "2":
            validChoice = true;
            fido.dogLoop();
            break;
        case "3":
            validChoice = true;
            buster.dogLoop();
            break;
    }
}

