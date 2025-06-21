console.clear();
console.log("📌 Ejercicio 6 funcionando correctamente");

// Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba,  aprueba o tiene excelente desempeño

let nota = 2.5;

if (nota >= 0) {
  if (nota <= 5) {
    if (nota < 3) {
      console.log("reprueba");
    } else if (nota < 4.5) {
      console.log("aprueba");
    } else {
      console.log("excelente desempeño");
    }
  }
}