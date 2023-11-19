let elementBall = document.querySelector("#ball")

const buttonAnswer = document.querySelector(".answer")
const buttonNumber = document.querySelector(".number")

let elementGetal = document.querySelector("#getal")
let randomGetal = Math.random() * 10

let answers = Math.ceil(Math.random() * 6);
const plaatjesArray = ['one.png', 'two.png', 'three.png', 'four.png', 'five.png', 'six.png'];
let antwoord = plaatjesArray[answers - 1];

let staatBall = "8ball"
let staatMana = "genoeg"

let audioMagic = new Audio("sfx/magicsound.wav")


// code voor Answer knop

function veranderBallAnswer() {
    elementBall.src = "images/ball_answer.png"
    staatBall = "answer"
    firework.classList.add("invisible")
    chooseMax.classList.add("invisible")
    document.querySelector("#getal").textContent = ""
    document.querySelector("h2").textContent = "Let magic guide your Journey"
}

buttonAnswer.addEventListener('click', veranderBallAnswer)

// code voor random antwoord

function shakeBallAnswer() {
    staatBall = "answer"
    elementBall.classList.add("shake")
    setTimeout(veranderAnswer, 1000)
}

function veranderAnswer() {
    answers = Math.ceil(Math.random() * 6);
    antwoord = plaatjesArray[answers - 1];
    elementBall.src = 'images/antwoord-' + antwoord;
    elementBall.classList.remove("shake")
    audioMagic.play()
}

// code voor Number knop

function veranderBallNumber() {
    elementBall.src = "images/ball_number.png"
    staatBall = "number"
    document.querySelector("h2").textContent = "Let magic guide your Journey"
    chooseMax.classList.remove("invisible")
}

buttonNumber.addEventListener('click', veranderBallNumber)

// code voor random getal

function shakeBallGetal() {
    document.querySelector("#getal").textContent = ""
    elementBall.classList.add("shake")

    setTimeout(getalBall, 1000)
}

function getalBall() {
    document.querySelector("h2").textContent = "Let magic guide your Journey"
    audioMagic.play()
    //   Bron textarea input gebruiken:  https://stackoverflow.com/questions/42449070/use-textarea-input-in-javascript
    let maxGetal = document.querySelector("#maxNumber").value
    elementGetal = Math.ceil(Math.random() * maxGetal)
    document.querySelector("#getal").textContent = elementGetal
    elementBall.classList.remove("shake")

    if (elementGetal == 8) {
        document.querySelector("h2").textContent = "Magic number 8!"
        firework.classList.remove("invisible")
        //  gif van: https://i.gifer.com/2r67.gif
    }
}


// code om te kijken welke mode uitgevoerd moet worden bij klikken op bal

function clickBall() {
    if ((staatBall == "number") && (staatMana == "genoeg")) {
        manaDown()
        shakeBallGetal()
    }
    if ((staatBall == "answer") && (staatMana == "genoeg")) {
        manaDown()
        shakeBallAnswer()
    }
    if (staatBall == "8ball") {
        chooseMode()
    }
    firework.classList.add("invisible")
}

elementBall.addEventListener('click', clickBall)
firework.addEventListener('click', clickBall)


// code voor als er geen mode is gekozen

function chooseMode() {
    document.querySelector("h2").textContent = "Choose a Mode"
}

// code voor manalevel

let manaBalk = document.querySelector("progress")
let manaValue = manaBalk.value

function manaDown() {
    if (manaBalk.value != 0) {
        staatMana = "genoeg"
        manaBalk.value = manaBalk.value - 20
        manaGenoeg()
    }
    if (manaBalk.value <= 0) {
        manaZero()
    }
}

function manaZero() {
    document.querySelector("h2").textContent = "You need to charge your mana"
    document.querySelector("#tipmana").textContent = "Use the moon to charge mana"
    elementGetal = none
}

function manaGenoeg() {
    document.querySelector("h2").textContent = "Let magic guide your Journey"
    document.querySelector("#tipmana").textContent = ""
}

let maan = document.querySelector("#maan")

function manaUp() {
    manaBalk.value = manaBalk.value + 40
    audioMagic.play()
}

maan.addEventListener('click', manaUp)


