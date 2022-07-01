var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual o comando para adicionar uma alteração no diretório ativo?");
  if(comando == "git add"){
    alert("O " + comando + ", adiciona uma alteração no diretório ativo. Parabéns você acertou!");
    var comando2 = prompt("Qual o comando para renomear e mover um arquivo do repositório?");
    if(comando2 == "git mv"){
      alert("O " + comando2 + ", serve tanto para renomear, como mover um arquivo do repositório. Parabéns você acertou!");
      var comando3 = prompt("Qual o comando para restaurar algum arquivo ou projeto por completo?");
      if(comando3 == "git restore"){
        alert("O " + comando3 + ", é uma nova opção quando estamos trabalhando e precisamos restaurar algum arquivo ou o projeto por completo. Parabéns você acertou!");
        var comando4 = prompt("Qual o comando para remover um arquivo de um repositório?");
        if(comando4 == "git rm"){
          alert("O " + comando4 + ", é usado para remover um arquivo de um repositório do git. Parabéns você acertou!");
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
  window.location="fase3.html";
};

