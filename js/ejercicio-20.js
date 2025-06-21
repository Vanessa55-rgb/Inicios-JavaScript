console.clear();
console.log("📌 Ejercicio 20 funcionando correctamente");

// Se ingresan las notas de 5 estudiantes
// Por cada estudiante, si la nota es menor a 3, se le muestra que está en riesgo 
// Al final, muestra: 
// Promedio general 
// Número de estudiantes en riesgo 
// Mayor y menor nota 

let notas = [2.5, 4.0, 1.8, 3.5, 5.0];
let suma = 0;
let enriesgo = 0;
let mayor = notas[0];
let menor = notas[0];

for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  suma = suma + nota;

  if (nota < 3) {
    enriesgo = enriesgo + 1;
  }

  if (nota > mayor) {
    mayor = nota;
  }

  if (nota < menor) {
    menor = nota;
  }
}
let promedio = suma / notas.length;

console.log("promedio general: " + promedio);
console.log("estudiantes en riesgo: " + enriesgo);
console.log("mayor nota: " + mayor);
console.log("menor nota: " + menor);