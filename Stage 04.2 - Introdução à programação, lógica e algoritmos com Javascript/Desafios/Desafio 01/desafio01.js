// Desafio 01 
/* 
  Mesma coisa da calculadora do first_lessons com mais duas coisas:
    - verificar se a soma dos dois números é par
    - verificar se os dois números inseridos são iguais
*/

let n1 = Number(prompt('Digite o primeiro número:'))
let n2 = Number(prompt('Digite o segundo número:'))

let sum = n1 + n2
let sub = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let restDiv = n1 % n2
let sumPair = ((sum % 2) == 0)
let n1n2Equal = (n1 == n2)

alert(`${n1} + ${n2} = ${sum}`)
alert(`${n1} - ${n2} = ${sub}`)
alert(`${n1} * ${n2} = ${mult}`)
alert(`${n1} / ${n2} = ${div}`)
alert(`${n1} % ${n2} = ${restDiv}`)
alert(`a soma (${n1} + ${n2}) é par? ${sumPair}`)
alert(`${n1} e ${n2} são iguais? ${n1n2Equal}`)
