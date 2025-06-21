console.clear();
console.log("📌 Ejercicio 11 funcionando correctamente");

// Evalúa si un usuario puede acceder a una oferta
// Tiene que haber iniciado sesión
// No debe tener reportes activos
// Su edad debe ser mayor a 21 años o tener membresía premium

let inicioSesion = true;
let reportesActivos = false;
let edad = 19;
let membresiaPremium = true;

if (inicioSesion === true) {
  if (reportesActivos === false) {
    if (edad > 21) {
      console.log("puede acceder a la oferta");
    } else {
      if (membresiaPremium === true) {
        console.log("puede acceder a la oferta");
      } else {
        console.log("no puede acceder, necesita ser mayor de 21 o tener membresía premium");
      }
    }
  } else {
    console.log("no puede acceder, tiene reportes activos");
  }
} else {
  console.log("no puede acceder, no ha iniciado sesión");
}