/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

// VARIABLES
let nameUser;
let surnameUser;
let kmRide;
let ageUser;
const kmPrice = 0.21;
let ridePrice;
let ridePriceNew;
const youngTarget = 18;
const seniorTarget = 65;
const youngOffer = 20;
const seniorOffer = 40;
const maxAge = 130;
let ticketPrice;
const button = document.getElementById("buy-button");

//ADD EVENT LISTENER FOR THE BUY BUTTON THAT CONTAIN THE CODE OF THIS EXERCISE
button.addEventListener("click", function() {
    //TAKE THE VALUE VARIABLES FROM THE FORM VALUE
    let nameUser = document.getElementById("user-name").value;
    console.log(nameUser); //TEST

})