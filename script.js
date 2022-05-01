//primeira variável é para entrada de valor por mês
var notaUm = document.querySelector("#nota-um");

//segunda variável é para entrada de valor por hora
var notaDois = document.querySelector("#nota-dois");

//terceira variável é para entrada de das horas por dias trabalhados
var notaTres = document.querySelector("#nota-tres");

//terceira variável é para entrada de das horas por dias trabalhados
var notaQuatro = document.querySelector("#nota-quatro");

//quarta variável é para entrada de das horas por dias trabalhados
var resposta = document.querySelector("#resposta");
var situacao = document.querySelector("#resultado");




function calcularMediaAluno() {
  var media = (notaUm.valueAsNumber - notaDois.valueAsNumber * notaTres.valueAsNumber * notaQuatro.valueAsNumber);
resposta.textContent = media;
  //resultado de aprovado ou reprovado
  if( media <= 0) {
  var a = "Morto"
  return situacao.textContent = a;
}
  else{
   var b = "Vivo"
   return  situacao.textContent = b;
  }
  
  
}