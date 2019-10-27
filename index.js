import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

// Code your solutions in this file

function writeCards(namesArray, event) {
    let thankYouCards = []
        for let i = 0; i < namesArray.length; i++) {
            thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` );
        }
        return thankYouCards;
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
}  