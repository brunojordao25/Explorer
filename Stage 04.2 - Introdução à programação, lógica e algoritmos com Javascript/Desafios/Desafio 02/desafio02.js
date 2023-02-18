// Desafio 02

/* 
  Criar uma lista com estudantes e suas notas das duas provas.
  Mostrar se o estudante teve sucesso ao passar ou não. Para passar a média é 7.
*/

const students = [
  {
    name: 'Weverton',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Marcos Rocha',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Gustavo Gomez',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Murilo',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Piquerez',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Gabriel Menino',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Zé Rafael',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Raphael Veiga',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Dudu',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Endrick',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Rony Rústico',
    p1: Number(Math.floor((Math.random() * 11)).toFixed(1)),
    p2: Number(Math.floor((Math.random() * 11)).toFixed(1))
  },
  {
    name: 'Abel Ferreira',
    p1: 10,
    p2: 10
  }
]

function studentAverage(student) {
  return ((student.p1 + student.p2)/2).toFixed(1)
}

function studentApproved(student) {
  return studentAverage(student) >= 7
}

function returnedMessage(student) {
  if (studentApproved(student)) {
    return `Parabéns, ${student.name}! Você foi aprovado!!`
  } else {
    return `Não foi dessa vez ${student.name}! Tente Novamente!!`
  }
}

for (let student of students) {
  alert(`A média do ${student.name} foi: ${studentAverage(student)}

${returnedMessage(student)}`)
}