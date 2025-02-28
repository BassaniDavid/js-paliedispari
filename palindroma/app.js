// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola e rendila minuscola
let word = prompt("inserisci una parola").toLowerCase();

// controlla che la parola sia inserita correttamente
console.log(word)

// crea una funzione

function Wordpal(userWord) {

    // separa la parola, inverti e unisci
    let wordDiv = userWord.split('').reverse().join('');

    // confronta la parola invertita con l'originale per capire se è polindroma e stampa il risultato
    if(userWord === wordDiv){
        console.log('la parola è palindroma')
    } else {
        console.log('la parola NON è palindroma')
    }
    
}

// richiama la funzione per attivarla
Wordpal(word)

