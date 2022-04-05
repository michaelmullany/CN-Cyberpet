class Dog {
    constructor(petName) {
        this.petName = petName;
        this.choice = 0;

        this.needsFeed = 5;
        this.needsDrink = 5;
        this.needsWalk = 5;
        this.needsPlay = 5;
        this.needsLoo = 5;
    }

    dogLoop() {
        while (true) {
            this.dogNeeds();
            this.ownerOutput();
            this.ownerInput();
            this.matchChoice();
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

    healthCheck() {
        if (this.needsLoo > 35) {
            console.log(`\n${this.petName} has had an accident in the kitchen :(`);
            this.needsLoo = 0;
        }
        if (this.needsFeed > 35) {
            console.log(`\n${this.petName} is looking thin and has started raiding the local bins :(`);
        }
        if (this.needsDrink > 35) {
            console.log(`\n${this.petName} is looking ill and has awful smelling breath :(`);
        }
        if (this.needsWalk > 35) {
            console.log(`\n${this.petName} is looking depressed and sullen :(`);
        }
        if (this.needsPlay > 35) {
            console.log(`\n${this.petName} is eyeing you with contempt :(`);
        }
    }
}

const prompt = require('prompt-sync')({ sigint: true });
const fido = new Dog("Fido");
fido.dogLoop();