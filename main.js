document.getElementById("clickBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.textContent = "Eskerrik asko bisitagatik! :)";
});

document.getElementById("namesBtn").addEventListener("click", () => {
  const namesOutput = document.getElementById("namesOutput");
  namesOutput.textContent = "Egileak: Stefan, Yago eta Duarte";
});

document.getElementById("hoverBlock").addEventListener("mouseover", () => {
  const hoverBlock = document.getElementById("hoverBlock");
  hoverBlock.textContent = "Sagua pasatu da!";
});

document.getElementById("hoverBlock").addEventListener("mouseout", () => {
  const hoverBlock = document.getElementById("hoverBlock");
  hoverBlock.textContent = "Pasatu sagua hemen";
});
