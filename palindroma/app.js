// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola
let word = prompt("inserisci una parola");

// controlla che la parola sia inserita correttamente
console.log(word)

// crea una funzione

function Wordpal(userWord) {

    let wordDiv = userWord.toLowerCase().split('');

    wordDiv = wordDiv.reverse();

    let wordInv = wordDiv.join('');

    if(userWord === wordInv){
        console.log('la parola è palindroma')
    } else {
        console.log('la parola NON è palindroma')
    }
    
}

Wordpal(word)

