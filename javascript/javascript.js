
//CONSTANT
const kleur = document.querySelector("#color");
const bloemetje = document.querySelector("#bloemetje");
const beerKleur = document.querySelector('#bruineBeer');
const pijlBeerRechts = document.querySelector("#pijlRechtsBeertje");
const pijlBeerLinks = document.querySelector("#pijlLinksBeertje");
const pijlAchtergrondRechts = document.querySelector('#pijlRechtsAchtergrond');
const pijlAchtergrondLinks = document.querySelector('#pijlLinksAchtergrond');
const pijlLinksKleding = document.querySelector('#pijlLinksKleding')
const pijlRechtsKleding = document.querySelector('#pijlRechtsKleding')
const body = document.querySelector("body");
const achtergrondVeranderen = document.querySelector("#achtergrondveranderen");
const kleineBeerVeranderen = document.querySelector('#beertjeveranderen');
const bril = document.querySelector("#bril");
const shirt = document.querySelector("#shirt");

//LET
let namen = ['Beernard', 'Beerend', 'Brom', 'Ijs', 'Beerta', 'Beert', 'Beernie', 'Beertie', 'Knuffel', 'Gummy'];
let naamveranderen = document.querySelector("#dobbelsteen");
let randomnaam = Math.random();
let beerkeuze = 0
let achtergrondKeuze = 0
let kleidingKeuze = 0

// audio eigen onderzoek via: https://www.w3schools.com/jsref/met_audio_play.asp
let audio = new Audio("./audio/beerRoar.mp3");


//FUNCTION

//beer van kleur veranderen
function beerkeuzeErbij() {
    beerkeuze += 1
    if(beerkeuze >= 1){
        beerkeuze = 1
    }
    beerUpdate();
}

function beerkeuzeEraf() {
    beerkeuze -= 1
    if(beerkeuze <= -1){
        beerkeuze = -1
    }
    beerUpdate();
}

function beerUpdate() {
    if(beerkeuze == 0) {
        document.getElementById("bruineBeer").src = "./images/bruinebeer.png"
        kleineBeerVeranderen.src = "./images/beertjeveranderen.bruin.png"
    }
    else if (beerkeuze == 1) {
        document.getElementById("bruineBeer").src = "./images/ijsbeer.png"
        kleineBeerVeranderen.src = "./images/beertjeveranderen.ijs.png"
    }
    else if (beerkeuze == -1) {
        document.getElementById("bruineBeer").src = "./images/pandabeer.png"
        kleineBeerVeranderen.src = "./images/beertjeveranderen.panda.png"
    }
}

//achtergrond veranderen
function achtergrondErbij() {
    achtergrondKeuze += 1
    if(achtergrondKeuze >= 1){
        achtergrondKeuze= 1
    }
    achtergrondUpdate();
}

function achtergrondEraf() {
    achtergrondKeuze -= 1
    if(achtergrondKeuze <= -1){
        achtergrondKeuze= -1
    }
    achtergrondUpdate();
}

function achtergrondUpdate() {
    if(achtergrondKeuze == 0) {
        body.classList.remove("achtergrond2")
        body.classList.remove("achtergrond3")
        achtergrondVeranderen.src = "./images/achtergrondveranderenbergen.png"
    } else if (achtergrondKeuze == 1) {
        body.classList.add("achtergrond2")
        achtergrondVeranderen.src = "./images/achtergrondveranderenbamboe.png"
    } else if (achtergrondKeuze == -1) {
        body.classList.add("achtergrond3")
        achtergrondVeranderen.src = "./images/achtergrondveranderenijs.png"
    }
}

//kleding veranderen
function kleidngKeuzeErbij() {
    kleidingKeuze += 1
    if(kleidingKeuze >= 1){
        kleidingKeuze = 1
    }
    kledingUpdate();
}

function kledingKeuzeEraf() {
    kleidingKeuze -= 1
    if(kleidingKeuze <= -1){
        kleidingKeuze = -1
    }
    kledingUpdate();
}

function kledingUpdate() {
    if(kleidingKeuze == 0) {
        bril.style.display = "none"
        shirt.style.display = "none"
    } else if( kleidingKeuze == 1){
        bril.style.display = "none"
        shirt.style.display = "block"
    } else if(kleidingKeuze == -1){
        bril.style.display = "block"
        shirt.style.display = "none"
    }
}

//beer geluid eigen onderzoek via: https://www.w3schools.com/jsref/met_audio_play.asp
function beerGromt(){
    audio.play();
}


//bloemetje groeit na 5 seconden lightbulb opdracht DLO
function geenBloemetje() {
    bloemetje.src = "./images/bloembak.png"
    setTimeout(groeiBloemetje, 5000)
}

function groeiBloemetje() {
    bloemetje.src = "./images/bloemetje.png"
}

geenBloemetje()

//Random naam als je op dobbelsteen klikt dobbelsteen opdracht DLO
function randomNaam() {
    document.getElementById('nameInput').value = namen[Math.ceil(Math.random() * 9)]
}

//EVENTLISTENER
beerKleur.addEventListener("click", beerGromt)
pijlBeerRechts.addEventListener("click", beerkeuzeErbij)
pijlBeerLinks.addEventListener("click", beerkeuzeEraf)
naamveranderen.addEventListener('click', randomNaam)
pijlAchtergrondRechts.addEventListener('click', achtergrondErbij)
pijlAchtergrondLinks.addEventListener('click', achtergrondEraf)
pijlLinksKleding.addEventListener('click', kledingKeuzeEraf)
pijlRechtsKleding.addEventListener('click', kleidngKeuzeErbij)

//CONSOLE LOG


