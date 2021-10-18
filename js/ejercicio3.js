function arrayN() {
  let numero = prompt("Ingrese un numero");
  let arr = [];
  for (let i = 0; i < numero; i++) {
    let random = Math.floor(Math.random() * 11);
    arr.push(random);
  }
  return arr;
}

function mostrarArrayN() {
  let numero = document.getElementById("input3").value;
  if (numero < 1 || numero > 20)
    alert("Ingrese un número mayor a 0 ó menor igual a 20");
  else {
    let arrayN = [];
    for (let i = 0; i < numero; i++) {
      let random = Math.floor(Math.random() * 11);
      arrayN.push(random);
    }

    let divArrayN = document.getElementById("div-array-n");
    divArrayN.innerHTML = "";

    let h2 = document.createElement("h2");
    if (numero == 1) h2.innerText = `Array de ${numero} número: [${arrayN}]`;
    else h2.innerText = `Array de ${numero} números: [${arrayN}]`;

    divArrayN.appendChild(h2);
  }
}
