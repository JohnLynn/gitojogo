var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual comando para integrar alterações de uma branch em outra?");
  if(comando == "git rebase"){
    alert("O " + comando + ", reaplicar commits de uma branch em cima de outra. Parabéns você acertou!");
    var comando2 = prompt("Qual comando para redefinir o HEAD atual para o estado especificado?");
    if(comando2 == "git reset"){
      alert("O " + comando2 + ", é para desfazer as alterações do índice de staging. Parabéns você acertou!");
      var comando3 = prompt("Qual comando serve como alternativa para o git checkout?");
      if(comando3 == "git switch"){
        alert("O " + comando3 + ", surge como alternativa quando estamos trabalhando com branchs. Parabéns você acertou!");
        var comando4 = prompt("Qual comando utilizado para capturar um ponto no histórico do git?");
        if(comando4 == "git tag"){
          alert("O " + comando4 + ", é em geral usado para capturar um ponto no histórico. Parabéns você acertou!");
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
  window.location="fase6.html";
};

