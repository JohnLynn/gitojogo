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
      var comando3 = prompt("Qual comando para criar uma cópia local de um repositório remoto?");
      if(comando3 == "git clone"){
        alert("O " + comando3 + ", é usado sobretudo para apontar para um repositório existente e fazer uma cópia. Parabéns você acertou!");
        var comando4 = prompt("Qual é o comando para iniciar o git?");
        if(comando4 == "git init"){
          alert("O " + comando4 + ", serve para iniciar o git. Parabéns você acertou!");
        }else{
          alert("Infelizmente você errou! Volte 4ª casas.");
          return;
        }
      }else{
        alert("Infelizmente você errou! Volte 3ª casas.");
        return;
      }
    }else{
      alert("Infelizmente você errou! Volte 2ª casas.");
      return;
    }
  }else{
    alert("Infelizmente você errou! Volte 1ª casa.");
    return;
  }
  window.location="fase2.html";
};
