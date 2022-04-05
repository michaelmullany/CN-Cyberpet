const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`)
    readline.close()
})

class Pet {
    constructor(name) {
        this._name = name;
        this._fedStatus = 100;
        this._waterStatus = 100;
        this._exerciseStatus = 100;
    }
    get name() {
        return this._name;
    }
    get fedStatus() {
        return this._fedStatus;
    }
    get waterStatus() {
        return this._waterStatus;
    }
    get exerciseStatus() {
        return this._exerciseStatus;
    }
    eat() {
        this._fedStatus += 5;
    }
    drink() {
        this._waterStatus += 5;
    }
    exercise() {
        this._exerciseStatus += 5;
        this._fedStatus -= 5;
        this._waterStatus -= 5;
    }
    displayStatus() {
        console.log(`${this.name} has the following status - Fed: ${this.fedStatus}, Water: ${this.waterStatus}, Exercise: ${this.exerciseStatus}`);
    }
}

const fido = new Pet("Fido");
fido.displayStatus();
fido.eat();
fido.displayStatus();
fido.drink();
fido.displayStatus();
fido.exercise();
fido.displayStatus();