console.clear();
console.log("📌 Ejercicio 15 funcionando correctamente");

// Pide que se ingresen contraseñas (simuladas en una lista) y
// Valida que cada una tenga al menos 8 caracteres y contenga un número 
// Si no cumple, muestra que debe cambiarla
// Detén el ciclo si se encuentra una contraseña válida

let contraseñas = ["hola123", "clave1", "segura2024", "admin", "12345678"];
let encontrada = false;

for (let i = 0; i < contraseñas.length; i++) {
  let contraseña = contraseñas[i];
  let contienenumero = false;

  for (let j = 0; j < contraseña.length; j++) {
    let caracter = contraseña[j];
    if (isNaN(caracter) === false) {
      contienenumero = true;
    }
  }

  if (contraseña.length >= 8) {
    if (contienenumero === true) {
      console.log("contraseña valida: " + contraseña);
      encontrada = true;
    }
  }

  if (encontrada === true) {
    break;
  } else {
    console.log("debe cambiar la contraseña: " + contraseña);
  }
}