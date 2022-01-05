function main() {
  const container = document.getElementById("container");
  container.className = "cont-id";
  let lbltitle = document.createElement("h1");
  lbltitle.className = "h1-id";
  lbltitle.innerText = "Visszajelzés";
  container.append(lbltitle);

  let inpTargy = document.createElement("input");
  inpTargy.placeholder = "Tárgy";
  inpTargy.className = "inpField targy-id";
  container.append(inpTargy);

  let inpText = document.createElement("textarea");
  inpText.className = "inpField text-id";
  inpText.placeholder = "Megjegyzés";
  container.append(inpText);

  let divDat = document.createElement("div");
  container.append(divDat);

  let checkB = document.createElement("input");
  checkB.className = "checkB-id";
  checkB.type = "checkbox";
  divDat.append(checkB);

  let lblDat = document.createElement("label");
  lblDat.innerHTML =
    "Elolvastam és elfogadom az <a href='./data'> Adatkezelési Tájékoztatót </a>";
  lblDat.className = "lblDat-id";
  divDat.append(lblDat);

  let btn = document.createElement("button");
  btn.className = "mentbtn-id";
  btn.innerText = "MENTÉS";
  container.append(btn);
}

window.addEventListener("load", main);
