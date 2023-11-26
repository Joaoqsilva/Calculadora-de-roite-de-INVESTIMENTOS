const calcular = document.querySelector("#calcular");
const translate = document.querySelector('#translate')
const hero = document.querySelector("#hero");
const form1 = document.querySelector(".form-1");
const form2 = document.querySelector(".form-2");

function mudarResultado(){
  const ALLresulta = document.querySelector(".classResultado")
  const ALLresulta_2 = document.querySelector(".classResultado_2")
  ALLresulta.classList.toggle('ativo')
  ALLresulta_2.classList.toggle('ativo')


}



function e(e){
  event.preventDefault(e)
}

function Totranslate() {
  hero.style.transform = "translateX(290px)";
  form1.style.display = "none";
  form2.style.display = "block";
  if( form2.style.display = "block"){
  calcular.style.color = '#ffff'
  translate.style.color = 'white'
  }
}


function Untranslate() {
  hero.style.transform = "translateX(0px)";
  form1.style.display = "block";
  form2.style.display = "none";
  if(form1.style.display = "block"){
    translate.style.color = '#ffff'
    calcular.style.color = 'white'
    }
}

Untranslate()



function calcularCotas() {
  const qtdCotas = document.querySelector("#cotas").value;
  const valorcota = document.querySelector("#valorcota").value;
  const p = document.querySelector("#result");
  const somar = qtdCotas / valorcota;
  p.textContent = `Voce pode comprar ${somar.toFixed(0)} cotas`

  e(e)
 
}


function clearFields() {
  // Selecionar os campos de entrada
  const cotasInput = document.getElementById('cotas');
  const valorCotaInput = document.getElementById('valorcota');
  const p = document.querySelector("#result");
  p.textContent = 'Resultado'
  // Limpar os valores dos campos de entrada
  if (cotasInput) {
    cotasInput.value = '';
  }
  if (valorCotaInput) {
    valorCotaInput.value = '';
  }
}
