const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  for (let x = 0; x < cosasQueAprendimos.length; x++) {
    let parseo = cosasQueAprendimos[x];

    const newLiEl = document.createElement("li");
    newLiEl.textContent = parseo.tema;
    newLiEl.className = parseo.class;

    const listaEL = document.querySelector(".lista");
    listaEL.appendChild(newLiEl);
  }
}

main();
