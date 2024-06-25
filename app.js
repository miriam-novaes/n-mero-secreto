alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}!`);
  if (chute == numeroSecreto) {
    break;
  } else if (chute > numeroSecreto) {
    alert(`ainda não, o número secreto e menor que ${chute}`);
  } else {
    alert(`ainda não, o número secreto e maior que ${chute}`);
  }
  tentativas++;
}

let palavraTentativa = tentativas > 1 ? "tentativas." : "tentativa.";
alert(
  `parabéns voçê descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);
