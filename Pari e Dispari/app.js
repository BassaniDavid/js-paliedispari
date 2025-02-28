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

// controlla che sia davvero compreso stra 1 e 5
if (numUser > 0 && numUser <= 5) {
    // resto dell'esercizio
}
else {
    console.log('OOOOHHHHH')
}