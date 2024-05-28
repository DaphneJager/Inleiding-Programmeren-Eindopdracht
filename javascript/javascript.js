
//CONSTANT
const kleur = document.querySelector("#color");
const bloemetje = document.querySelector("#bloemetje");
const beerKleur = document.querySelector('#bruineBeer');
const pijlBeerRechts = document.querySelector("#pijlRechtsBeertje");
const pijlBeerLinks = document.querySelector("#pijlLinksBeertje");
const pijlAchtergrondRechts = document.querySelector('#pijlRechtsAchtergrond');
const pijlAchtergrondLinks = document.querySelector('#pijlLinksAchtergrond');
const body = document.querySelector("body");
const achtergrondVeranderen = document.querySelector("#achtergrondveranderen");

//LET
let namen = ['Beernard', 'Beerend', 'Brom', 'Ijs', 'Beerta', 'Beert', 'Beernie', 'Beertie'];
let naamveranderen = document.querySelector("#dobbelsteen");
let randomnaam = Math.random();
let audio = new Audio("./audio/beerRoar.mp3");
let beerkeuze = 0
let achtergrondKeuze = 0
let kleidingKeuze = 0


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
    }
    else if (beerkeuze == 1) {
        document.getElementById("bruineBeer").src = "./images/ijsbeer.png"
    }
    else if (beerkeuze == -1) {
        document.getElementById("bruineBeer").src = "./images/pandabeer.png"
    }

}

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



//beer geluid eigen onderzoek
function beerGromt(){
    audio.play();
}


//bloemetje groeit na 5 seconden lightbulb opdracht
function showBloemetje() {
    bloemetje.src = "./images/bloembak.png"
    setTimeout(groeiBloemetje, 5000)
}

function groeiBloemetje() {
    bloemetje.src = "./images/bloemetje.png"
}

showBloemetje()

//Random naam als je op dobbelsteen klikt dobbelsteen opdracht
function randomNaam() {
    document.getElementById('nameInput').value = namen[Math.ceil(Math.random() * 5)]
}

//EVENTLISTENER
beerKleur.addEventListener("click", beerGromt)
pijlBeerRechts.addEventListener("click", beerkeuzeErbij)
pijlBeerLinks.addEventListener("click", beerkeuzeEraf)
naamveranderen.addEventListener('click', randomNaam)
pijlAchtergrondRechts.addEventListener('click', achtergrondErbij)
pijlAchtergrondLinks.addEventListener('click', achtergrondEraf)

//CONSOLE LOG


