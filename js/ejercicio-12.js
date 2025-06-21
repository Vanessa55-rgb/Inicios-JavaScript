console.clear();
console.log("📌 Ejercicio 12 funcionando correctamente");

// Una app de transporte da recomendaciones dependiendo de
// La hora del día (mañana, tarde, noche)
// El clima (soleado, lluvioso, nublado)
// Si el usuario tiene paraguas o no dependiendo de esas variables, sugiere si caminar, tomar bus, o espera

let hora = "noche";
let clima = "lluvioso";
let paraguas = true;

if (clima === "lluvioso") {
  if (paraguas === false) {
    console.log("espera o toma bus");
  } else {
    if (hora === "tarde") {
      console.log("toma bus");
    } else {
      console.log("camina");
    }
  }
} else {
  if (hora === "noche") {
    console.log("toma bus");
  } else {
    if (hora === "mañana") {
      console.log("camina");
    } else {
      console.log("camina");
    }
  }
}