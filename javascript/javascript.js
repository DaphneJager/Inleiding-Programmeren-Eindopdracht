
//CONSTANT
const kleur = document.querySelector("#color");
const bloemetje = document.querySelector("#bloemetje");

//LET
const beerKleur = document.querySelector('#bruineBeer')
const pijlBeerRechts = document.querySelector("#pijlRechtsBeertje")
const pijlBeerLinks = document.querySelector("#pijlLinksBeertje")
let namen = ['Beernard', 'Beerend', 'Brom', 'Ijs', 'Beerta', 'Beert', 'Beernie', 'Beertie']
let naamveranderen = document.querySelector("#dobbelsteen")
let randomnaam = Math.random()
let audio = new Audio("./audio/beerRoar.mp3")
let beerkeuze = 0
let achtergrondKeuze = 0
let kleidingKeuze = 0

//FUNCTION
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

//beer geluid
function beerGromt(){
    audio.play();
}



//bloemetje groeit na 5 seconden. 
function showBloemetje() {
    bloemetje.src = "./images/bloembak.png"
    setTimeout(groeiBloemetje, 5000)
}

function groeiBloemetje() {
    bloemetje.src = "./images/bloemetje.png"
}

showBloemetje()

//Random naam als je op dobbelsteen klikt inspiratie Bron: https://stackoverflow.com/questions/2388629/how-to-update-an-input-text-with-javascript en wat hulp van Diego Ramon
function randomNaam() {
    document.getElementById('nameInput').value = namen[Math.ceil(Math.random() * 5)]
}

//EVENTLISTENER
beerKleur.addEventListener("click", beerGromt)
pijlBeerRechts.addEventListener("click", beerkeuzeErbij)
pijlBeerLinks.addEventListener("click", beerkeuzeEraf)
naamveranderen.addEventListener('click', randomNaam)

//CONSOLE LOG

//eventlistener
