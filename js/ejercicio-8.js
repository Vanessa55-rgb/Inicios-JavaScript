console.clear();
console.log("📌 Ejercicio 8 funcionando correctamente");

// Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de Colombia. Evalúa si una persona puede participar 

let edad = 14;
let pais = "colombia";

if (edad >= 15) {
  if (edad <= 35) {
    if (pais === "colombia") {
      console.log("puede participar");
    } else {
      console.log("no puede participar, no vive en colombia");
    }
  } else {
    console.log("no puede participar, es muy mayor");
  }
} else {
  console.log("no puede participar, es muy joven");
}