function e(e) {
  event.preventDefault(e);
}

function clearForm() {
  e();
  const qtdcotas_2 = document.getElementById("qtdcotas_2");
  const time = document.getElementById("time");
  const rendimento = document.getElementById("rendimento");

  if (qtdcotas_2) {
    qtdcotas_2.value = "";
  }
  if (time) {
    time.value = "";
  }
  if (rendimento) {
    rendimento.value = "";
  }
} 




function somarQtdCotas() {
  e(e);
  const qtdcotas_2 = document.getElementById("qtdcotas_2").value;
  const time = document.getElementById("time").value;
  const rendimento = document.getElementById("rendimento").value;
  const result = document.querySelector("#result_2");
  const somar = qtdcotas_2 * time * rendimento;
  result.innerHTML = `o seu rendimento em ${time} MESES vai ser de R$${somar.toFixed(2)}`;

}
