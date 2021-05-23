// JS CAMPO MINATO
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
console.log(randomNumbers(1, 100));

var bombe = [];
var livello = parseInt(prompt("Scegli una difficoltà tra [0/1/2]"));
var limite;

switch (livello) {
  case 1:
    limite = 80;
    break;
  case 2:
    limite = 50;
    break;
  default:
    limite = 100;
    break;
}

while (bombe.length < 16) {
  const numero = randomNumbers(1, 100);
  bombe.push(numero);
  if (!bombe.includes(numero)) {
    bombe.push(numero);
  }
}
console.log(bombe);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo un altro numero all'utente.

var arrayUtente = [];
for (let index = 1; index <= limite - 16; index++) {
  let numeroUtente = Number(
    prompt("Inserisci un numero compreso tra 1 e " + limite)
  );
  while (numeroUtente < 1 || numeroUtente > 100 || isNaN(numeroUtente)) {
    alert("Devi inserire un numero tra 1 e 100");
    numeroUtente = parseInt(
      prompt("Inserisci un numero compreso tra 1 e " + limite)
    );
  }
  if (!arrayUtente.includes(numeroUtente)) {
    if (bombe.includes(numeroUtente)) {
      alert("Sei un tonno 💣! Il tuo punteggio è: " + arrayUtente.length);
      break;
    }
    arrayUtente.push(numeroUtente);
    console.log(arrayUtente);
  } else {
    alert("Hai già inserito questo numero" + arrayUtente);
    i--;
  }
  console.log(index);
}

/* La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti */
/* Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito. */
if (arrayUtente === limite - 16) {
  alert("Hai vinto! ✌🏻 Il tuo punteggio è: " + arrayUtente.length);
}
