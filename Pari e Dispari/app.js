// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente pari o dispari
let oddOrEven = confirm('Pari o dispari. vuoi pari?')

// chiedi un numero da 1 a 5
let numUser = Number(prompt('inserisci un numero da 1 a 5'))

// generatore casuale di numeri
function randomGenerator (num1) {
   num1 = (Math.floor( Math.random() * 5 )+ 1 )
    return num1
}

// attiva la funzione generatore casuale di numeri e assegna il risultato al pc
let pcRanNum = randomGenerator()

// stampa il numero assegnato al pc
console.log(pcRanNum)

// controlla che sia davvero compreso stra 1 e 5
if (numUser > 0 && numUser <= 5) {
    // sommo i 2 numeri
    let tot = numUser + pcRanNum

    // funzione per stabilire se è pari o dispari

    function OddEven (sum1) {
        
        return sum1 % 2 == 0
    }

    isOddOrEven = OddEven(tot)
    console.log(isOddOrEven)
    
    // se il valore è uguale a quello scelto dall utente ha ViewTransition, alterimenti perso
    if(oddOrEven === isOddOrEven){
        console.log('complimenti hai vinto!')
    }
    else{
        console.log('Mi dispiace hai perso')
    }
}
else {
    console.log('OOOOHHHHH')
}