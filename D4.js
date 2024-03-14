// creazione dinamica numeri tabellone
for (let i = 1; i <= 76; i++) {
  const divNumTab = document.createElement("div");
  divNumTab.innerText = i;
  divNumTab.className = "NumeriTabellone";
  const tabellone = document.getElementById("tabellone");
  tabellone.appendChild(divNumTab);
}

const btnEstrazione = document.getElementById("Estrazione");

btnEstrazione.onclick = function () {
  let numeroRandomico = Math.floor(Math.random() * 76);
  const numeroEstratto = document.createElement("h3");
  const bloccoEstrazione = document.getElementById("bloccoEstrazione");
  numeroEstratto.innerText = numeroRandomico;

  ControlloNumeri(numeroEstratto.innerText);

  bloccoEstrazione.appendChild(numeroEstratto);
  console.log(numeroRandomico);
};

const ControlloNumeri = function (numEstratto) {
  const listaTab = document.getElementsByClassName("NumeriTabellone");
  Array.from(listaTab).forEach((element, i) => {
    if (element.innerText === numEstratto) {
      element.style.backgroundColor = "red";
    }
  });
};
