console.clear();
console.log("📌 Ejercicio 13 funcionando correctamente");

// Crea un sistema de acceso a una plataforma que
// Verifique si el usuario ingresó usuario y contraseña válidos
// Bloquee el acceso si hay más de 3 intentos fallidos
// Permita el acceso si es administrador, aunque falle una vez

let usuariovalido = true;
let contraseñaValida = false;
let intentos = 2;
let esadmin = true;

if (usuariovalido === true) {
  if (contraseñaValida === true) {
    console.log("acceso permitido");
  } else {
    if (esadmin === true) {
      if (intentos < 3) {
        console.log("acceso permitido como administrador");
      } else {
        console.log("demasiados intentos fallidos");
      }
    } else {
      console.log("acceso denegado");
    }
  }
}