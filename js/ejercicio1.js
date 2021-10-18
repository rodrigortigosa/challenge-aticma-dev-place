function cantidadMayusculas(str) {
  let cant = 0;
  for (let s of str) {
    if (s == s.toUpperCase() && s != s.toLowerCase()) cant++;
  }
  return cant;
}

function mostrarCantidadMayusculas(str) {
  const cant = cantidadMayusculas(str);

  let divMayus = document.getElementById("div-mayus");
  divMayus.innerHTML = "";

  let p = document.createElement("p");
  p.innerText = "Cantidad de mayúsculas:";

  divMayus.appendChild(p);

  let h2 = document.createElement("h2");

  h2.innerText = `${cant}`;

  divMayus.appendChild(h2);
}
