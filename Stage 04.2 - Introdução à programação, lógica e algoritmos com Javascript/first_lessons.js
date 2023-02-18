// Learn by Doing Javascript
// Cada case é uma lição diferente do explorer - Mude a chave para acessar a respectiva lição

let key = 0 // Acessar o código de cada questão

switch (key) {
  case 1:
    // 1. Perguntar e imprimir nome na tela

    let name = prompt("Qual é o seu nome?")
    alert(`Olá ${name}`)
    break;
    
  case 2:
    // 2. Somar dois números

    alert("Vamos somar dois números")
    let numberOne = prompt("Digite o primeiro número:")
    let numberTwo = prompt("Digite o segundo número:")
    let result = Number(numberOne) + Number(numberTwo)
    alert("Resultado: " + result)
    break;

  case 3:
    /* 3. Pedir dois números e mostrar o resultado das
    5 operações: +, -, *, / e % */
    let firstNumber = prompt('Digite o primeiro número:')
    let secondNumber = prompt('Digite o segundo número:')
    firstNumber = Number(firstNumber)
    secondNumber = Number(secondNumber)

    let sum = firstNumber + secondNumber
    let sub = firstNumber - secondNumber
    let multi = firstNumber * secondNumber
    let div = firstNumber / secondNumber
    let restDiv = firstNumber % secondNumber

    alert("Soma: " + sum)
    alert("Subtração: " + sub)
    alert("Multiplicação: " + multi)
    alert("Divisão: " + div)
    alert("Resto da divisão: " + restDiv)
    break;

  case 4:
    // Calcular média do aluno e mostrar se passou ou reprovou
    let studentName = prompt("Qual é o nome do aluno?")
    let n1 = prompt("Qual foi a nota da primeira prova?")
    let n2 = prompt("Qual foi a nota da segunda prova?")
    let n3 = prompt("Qual foi a nota da terceira prova?")

    let studentAverage = ((Number(n1) + Number(n2) + Number(n3))/3).toFixed(2)
    let studentApproved = studentAverage >= 6

    if (studentApproved) {
      alert(`${studentName}, Parabéns! você passou com a média de: ${studentAverage} `)
    } else {
      alert(`${studentName}, estude para a recuperação! Sua média foi de: ${studentAverage}`)
    }
    break;
    
  case 5:
    // Usuário cria uma lista com 10 itens e depois mostramos esses itens separados por vírgula
    let items = []

    for (let i = 0; i < 10; i++) {
      items.push(prompt(`Digite o ${i + 1}º item:`))
    }

    alert(`Lista de items:
    ${items.join(', ')}`)

    break;

  case 6:

    break;
  default:
    alert("mude o valor da chave (key) no código para acessar a qeustão equivalente")
    break;
}
