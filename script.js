let num1 = "";
let num2 = "";
let operador = "";
let resultado = "";

function agregarNumero(numero) {
  if (operador === "") {
    if (num1.endsWith("+") || num1.endsWith("-") || num1.endsWith("*") || num1.endsWith("/")) {
      num1 = num1.slice(0, -1);
    }
    if (num1 === "" && (numero === "*" || numero === "/")) {
      return;
    }
    num1 += numero;
    actualizarPantalla(num1.trim());
  } else {
    if (num2.endsWith("+") || num2.endsWith("-") || num2.endsWith("*") || num2.endsWith("/")) {
      num2 = num2.slice(0, -1);
    }
    if (num2 === "" && (numero === "*" || numero === "/")) {
      return;
    }
    num2 += numero;
    actualizarPantalla(num2.trim());
  }
}

function operacion(op) {
  if (num1 !== "") {
    operador = op;
    actualizarPantalla(num1.trim() + operador);
  }
}

function calcular() {
  if (num1 !== "" && num2 !== "") {
    try {
      resultado = eval(num1.trim() + operador + num2.trim());
    } catch (error) {
      resultado = "Error";
    }

    num1 = resultado.toString();
    num2 = "";
    operador = "";
    actualizarPantalla();
  }
}

function borrar() {
  num1 = "";
  num2 = "";
  operador = "";
  resultado = "";
  actualizarPantalla();
}

function actualizarPantalla() {
  let pantalla = document.getElementById("resultado");
  if (num1 === "" && num2 === "") {
    pantalla.textContent = "0";
  } else if (operador === "") {
    pantalla.textContent = num1;
  } else {
    pantalla.textContent = num1 + " " + operador + " " + num2;
  }
}