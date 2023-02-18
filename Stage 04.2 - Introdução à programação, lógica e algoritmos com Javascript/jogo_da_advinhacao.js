// Jogo da Advinhação

/* 
  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? de 0 a 10"   

  Crie uma lógica para gerar um número aleatório
  e verificar se o número digitado é o que foi 
  gerado pelo sistema.

  Enquanto o usuário não advinhar o número, motre:
  "Erro, tente novamente"

  Caso o usuário acerte o número, apresar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem pelo número de tentativas do usuário
*/

let number = Math.floor(Math.random() * 11)
// alert(number)
let corectGuess = false
let tries = 0

while (!corectGuess) {
  let guess = prompt("Advinhe o número que estou pensando? de 0 a 10")
  tries++
  if (guess == number) {
    alert(`Parabéns! Você advinhou o número em ${tries} tentativas`)
    corectGuess = true
  } 
}


