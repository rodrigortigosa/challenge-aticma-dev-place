function unirArrays(arr1, arr2) {
  let arrNuevo = [];
  for (let i = 0; i < arr1.length; i++) {
    arrNuevo.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    arrNuevo.push(arr2[i]);
  }

  return ordenarArray(arrNuevo);
}

function mostrarArrayUnido(arr1, arr2) {
  let arrayUnido = unirArrays(arr1, arr2);
  let divArrayUnido = document.getElementById("div-array-unido");

  divArrayUnido.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.innerText = `Array ordenado: [${arrayUnido}]`;

  divArrayUnido.appendChild(h2);
}
