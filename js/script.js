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
    let nameUser = document.getElementById("user-name-input").value;
    let surnameUser = document.getElementById("user-surname-input").value;
    let ageUser = document.getElementById("user-age-input").value;
    let kmRide = document.getElementById("ride-km-input").value;


    //PARSE NUMBER INTO INT
    ageUser = parseInt(ageUser);
    kmRide = parseInt(kmRide);
    //CHECK ALL THE VALUES
    if (nameUser && isNaN(nameUser) && surnameUser && isNaN(surnameUser) && ageUser && !isNaN(ageUser) && ageUser > 0 && kmRide && !isNaN(kmRide) && kmRide > 0 ) {
        //INPUTS ARE OK, CALC RIDE PRICE
        ridePrice = kmPrice * kmRide;
        //APPLY THE OFFER BASED ON THE AGE
        if (ageUser < youngTarget) {
            ridePriceNew = ridePrice - (ridePrice * youngOffer / 100);
            document.getElementById("offer-type").innerHTML = "Young"
        }
        else if (ageUser > seniorTarget) {
            ridePriceNew = ridePrice - (ridePrice * seniorOffer / 100);
            document.getElementById("offer-type").innerHTML = "Senior"

        }
        else {
            ridePriceNew = ridePrice;
            document.getElementById("offer-type").innerHTML = "Base"
        }

            //WRITE THE AGE IN THE TICKET html
            document.getElementById("user-age").innerHTML = ageUser;
            //WRITE RIDE KMs IN THE TICKET html
            document.getElementById("ride-km").innerHTML = kmRide;
            // MAKE THE PRICE IN EURO FORMAT (2 decimals)
            ridePriceNew = ridePriceNew.toFixed(2);
            // REPLACE DOT WITH COMMA (euro format)
            ridePriceNew = ridePriceNew.replace(".", ",");
            //ADD EURO SYMBOL 
            ridePriceNew = ridePriceNew += "€";
            //ADD ticket-price in the HTML
            document.getElementById("ticket-price").innerHTML = ridePriceNew;
            // WRITE BASE PRICE IN HTML ONLY IF OFFER IS APPLIED (EURO FORMATTED)
            if (ageUser < youngTarget || (ageUser > seniorTarget)) {
            ridePrice = ridePrice.toFixed(2);
            ridePrice = ridePrice.replace(".", ",");
            ridePrice = ridePrice += "€";
            document.getElementById("base-price").innerHTML = ridePrice;
}
// OTHERWISE EMPTY THE DIV
else {
    document.getElementById("pricebase-box").innerHTML = "";
}


    }

    else {
        //INPUTS CHECK FAILED
        document.getElementById("error").innerHTML = "I dati di acquisto non risultano validi, riprova.";
    }
})