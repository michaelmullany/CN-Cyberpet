const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
// })

class Pet {
    constructor(name) {
        this._name = name;
        this._frustration = 0;
        this._problem = 0;
    }

    petLoop() {

    }

    checkFrustration() {

    }

    chooseProblem() {

    }

    ownerOutput() {
        const options = [
            `1. Feed ${this.name}`,
            `2. Give ${this.name} a drink`,
            `3. Take ${this.name} for a walk`,
            `4. Play with ${this.name}`,
            `5. Let ${this.name} do its business`
        ]
        let formQuestion = `${options.join("\n")}\n`;
        readline.question(formQuestion, response => {
            console.log(`You selected option ${response}`)
            readline.close()
        })
    }

    ownerInput() {

    }
}

const fido = new Pet("Fido");
fido.ownerOutput();