document.getElementById("verify").addEventListener("click", verify);
document.getElementById("clear").addEventListener("click", clear);
let result = document.getElementById("result");

function verify() {
  let valor = document.getElementById("number").value;
  valor = parseInt(valor);

  if (!isNaN(valor)) {
    if (valor % 2 == 0) {
      result.innerHTML = "<strong>O número " + valor + " é par</strong>";
    } else {
      result.innerHTML = "É impar";
    }
  }
  else {
    result.innerHTML = "Valor invalido";
  }
  }


function clear() {
  document.getElementById("number").value = "";
  result.innerHTML = ""
}
