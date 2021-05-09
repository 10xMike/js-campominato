// Chiedo all'utente di scegliere la difficoltà e controllo che abbia inserito un valore giusto
var difficulty = Number(prompt('Inserisci un livello di difficoltà tra 0, 1 o 2'));
console.log(difficulty);
var level;

while (difficulty !== 0 && difficulty !== 1 && difficulty !== 2) {
    alert('Inserisci una difficoltà valida')
    level = Number(prompt('Inserisci un livello di difficoltà tra 0, 1 o 2'));
}
// In base alla difficoltà vado a decidere la quantità di numeri

// Il computer deve generare 16 numeri casuali tra 1 e 100
function getRandomNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// I numeri non possono essere duplicati
// In seguito devo chiedere all'utente (100 - 16) volte di inserire un numero alla volta, compreso tra 1 e 100
// L'utente non può inserire più volte lo stesso numero
// Comunico all'utente se ha vinto