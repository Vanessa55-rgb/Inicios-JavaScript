console.clear();
console.log("📌 Ejercicio 17 funcionando correctamente");

// Permite hasta 3 intentos para iniciar sesión
// Si el usuario ingresa mal el nombre o contraseña, se le notifica cuántos intentos le quedan
// Si acierta, muestra “Bienvenido”
// Si falla 3 veces, muestra “Cuenta bloqueada”

let usuario = "usuario";
let clave = "clave";
let intentos = 0;

while (intentos < 3) {
  let usuarioingresado = "usuario";
  let claveingresada = "incorrecta";

  if (usuarioingresado === usuario) {
    if (claveingresada === clave) {
      console.log("bienvenido");
      break;
    } else {
      intentos = intentos + 1;
      console.log("clave incorrecta, intentos usados: " + intentos);
    }
  } else {
    intentos = intentos + 1;
    console.log("usuario incorrecto, intentos usados: " + intentos);
  }

  if (intentos === 3) {
    console.log("cuenta bloqueada");
  }
}