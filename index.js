const prompt = require("prompt-sync")()

const options = ["Rock", "Paper", "Scissors"] // length = 3
let usrScore = 0
let compScore = 0

// Math.random() provides value b/w 0 and 1
// Multiplying with length of options array gives value b/w 0 and length of array

// Array indexing options[0, 1, 2]
function generateCompChoice() {
    const random = Math.floor(Math.random() * options.length) // integers values b/w 0 and 3
    const computerChoice = options[random]
    console.log("The Computer Picked: " + computerChoice)
    return computerChoice
}

function printUsrChoice() {
    const usrChoice = prompt("Enter your Choice: ")
    if (usrChoice === options[0]) console.log("You Picked: Rock!")
    if (usrChoice === options[1]) console.log("You Picked: Paper!")
    if (usrChoice === options[2]) console.log("You Picked: Scissors!")
    return usrChoice
}

function getResult(usrCho, compCho) {
    //TIE
    if (usrCho === compCho) console.log("ITS A TIE!")

    //USER WINNING
    if (
        usrCho === options[0] && compCho === options[2] ||
        usrCho === options[1] && compCho === options[0] ||
        usrCho === options[2] && compCho === options[1]
    ) {
        console.log("YOU WIN!")
        usrScore += 1
    }
    //USER WINNING
    if (
        usrCho === options[2] && compCho === options[0] ||
        usrCho === options[0] && compCho === options[1] ||
        usrCho === options[1] && compCho === options[2]
    ) {
        console.log("YOU LOSE!")
        compScore += 1
    }
}

function main() {
    while (true) {
        console.log("Welcome to Rock Paper Scissors")
        console.log("------------------------------")

        const usrChoice = printUsrChoice()
        const computerChoice = generateCompChoice()
        getResult(usrChoice, computerChoice)
        console.log("Player: " + usrScore)
        console.log("Computer: " + compScore)

        console.log("------------------------------")
        let playAgain = prompt("Continue? (y/n)")
        if (playAgain.toLowerCase() != "y") break
    }
}
main()
