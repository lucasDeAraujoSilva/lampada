const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lampada = document.getElementById("lampada");

function isLampBroken() {
  return lampada.src.indexOf("imagens/LAMPADAQUEBRADA.jpg") > -1;
}

function lampOn() {
  if (!isLampBroken()) {
    lampada.src = "imagens/LAMPADALIGADA.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lampada.src = "imagens/LAMPADADESLIGADA.jpg";
  }
}

function lampBroken() {
  lampada.src = "imagens/LAMPADAQUEBRADA.jpg";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lampada.addEventListener("mouseover", lampOn);
lampada.addEventListener("mouseleave", lampOff);
lampada.addEventListener("dblclick", lampBroken);
