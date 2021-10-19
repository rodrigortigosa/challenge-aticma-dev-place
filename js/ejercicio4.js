function ordenarArray(arr) {
  return arr.sort((a, b) => a - b);
}

function mostrarArrayOrdenado(arr) {
  let arrayOrdenado = ordenarArray(arr);

  let divArrayOrdenado = document.getElementById("div-array-ordenado");

  divArrayOrdenado.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.innerText = `Array ordenado: [${arrayOrdenado}]`;

  divArrayOrdenado.appendChild(h2);
}
