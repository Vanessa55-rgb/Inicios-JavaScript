console.clear();
console.log("📌 Ejercicio 14 funcionando correctamente");

// Simula el ingreso de 5 nombres de usuarios. Por cada usuario ingresado
// Verifica si el nombre tiene más de 3 caracteres
// Si no cumple, muestra un mensaje de error
// Al final, muestra cuántos usuarios válidos se registraron

let nombres = ["ana", "vanessa", "santiago", "monica", "cesar"];
let validos = 0;

for (let i = 0; i < nombres.length; i++) {
  let nombreactual = nombres[i];
  if (nombreactual.length > 3) {
    validos = validos + 1;
  } else {
    console.log("nombre inválido: " + nombreactual);
  }
}
console.log("usuarios válidos registrados: " + validos);
