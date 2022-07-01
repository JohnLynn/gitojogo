var button = document.querySelector("button");

button.onclick = function aula3() {
  var comando = prompt("Qual comando para baixar conteúdos de um repositório remoto?");
  if(comando == "git fetch"){
    alert("O " + comando + ", é um comando básico usado para baixar conteúdos de um repositório remoto. Parabéns você acertou!");
    var comando2 = prompt("Qual o comando para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata?");
    if(comando2 == "git pull"){
      alert("O " + comando2 + ", é usado para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata. Parabéns você acertou!");
      var comando3 = prompt("Qual o comando para enviar o conteúdo do repositório local para um remoto?");
      if(comando3 == "git push"){
        alert("O " + comando3 + ", transfere commits do repositório local a um repositório remoto. Parabéns você acertou!");
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
  window.location="fase4.html";
};

