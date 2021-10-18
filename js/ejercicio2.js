function sumarUno(arr) {
  return arr.map((value) => value + 1);
}

function mostrarNuevoArray(arr) {
  let nuevo = sumarUno(arr);
  console.log(nuevo);
  let divNuevoArray = document.getElementById("div-nuevo-array");
  divNuevoArray.innerHTML = "";

  let h2 = document.createElement("h2");
  h2.innerText = `Nuevo array: [${nuevo}]`;

  divNuevoArray.appendChild(h2);
}
