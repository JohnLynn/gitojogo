/*
  O QUE É UMA VARIÁVEL?
  variável é um espaço reservado na memória do computador.
  vamos declarar variáveis no JavaScript?
*/

var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual é o comando para criar um diretório localmente, afim de iniciar seu projeto?");
  if(comando == "mkdir"){
    alert("O " + comando + ", serve para criar um novo diretório. Parabéns você acertou!");
    var comando2 = prompt("Qual é o comando para entrar e sair dos repositórios?");
    if(comando2 == "cd"){
      alert("O " + comando2 + ", é utilizado para navegar entre repositórios locais. Parabéns você acertou!");
      var comando3 = prompt("Qual é o comando para iniciar o git?");
      if(comando3 == "git init"){
        alert("O " + comando3 + ", serve para iniciar o git. Parabéns você acertou!");
      }else{
        alert("Infelizmente você errou! Vamos tentar novamente?");
        return;
      }
    }else{
      alert("Infelizmente você errou! Vamos tentar novamente?");
      return;
    }
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  }
  window.location="fase2.html";
};
