// Paso 1: creamos la variable saldo con 1000€
// Esta variable guarda el dinero disponible en la cuenta
let saldo = 1000;

function retirar() {

  // Paso 2: guardamos la cantidad que el usuario quiere retirar
  // Number() convierte el texto del input a número para poder comparar y restar
  let cantidadARetirar = Number(document.getElementById("cantidad").value);


  // Paso 3: filtro de validaciones con if / else
  // El orden importa: primero negativo, luego fondos, luego la resta

  // Regla 3: si el número es 0 o negativo, no es válido
  if (cantidadARetirar <= 0) {
    document.getElementById("resultado").textContent = "Cantidad no válida";

  // Regla 2a: si pide más de lo que hay en el saldo, fondos insuficientes
  } else if (cantidadARetirar > saldo) {
    document.getElementById("resultado").textContent = "Fondos insuficientes. Tu saldo es de " + saldo + "€";

  // Regla 2b: si la cantidad es válida, hacemos la resta
  } else {

    // - = resta directamente sobre la variable saldo
    // es lo mismo que escribir: saldo = saldo - cantidadARetirar
    saldo -= cantidadARetirar;

    // actualizamos el número que se ve en pantalla
    document.getElementById("saldo").textContent = saldo;

    // mostramos el mensaje con el saldo restante
    document.getElementById("resultado").textContent = "Retiro exitoso. Te quedan " + saldo + "€";
  }

}