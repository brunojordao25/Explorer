// Calculo de IMC dos pacientes

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function imcCalculator (patient) {
  return (patient.weight/((patient.height/100)**2)).toFixed(2)
}

for (let patient of patients) {
  alert(`Paciente ${patient.name} possui o IMC de: ${imcCalculator(patient)}`)
}