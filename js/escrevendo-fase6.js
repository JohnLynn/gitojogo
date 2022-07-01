var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual comando para visualizar o que vem sendo feito em uma determinada branch?");
  if(comando == "git log"){
    alert("O " + comando + ", serve para visualizar as alterações de uma branch, como avaliar um arquivo em especial. Parabéns você acertou!");
    var comando2 = prompt("Qual comando para visualizar os detalhes do commit atual?");
    if(comando2 == "git show"){
      alert("O " + comando2 + ", usamos esse comando para visualizar os detalhes do commit atual. Parabéns você acertou!");
      var comando3 = prompt("Qual o comando para exibir as condições do diretório de trabalho?");
      if(comando3 == "git status"){
        alert("O " + comando3 + ", permite que você veja quais alterações foram despreparadas, quais não foram e quais arquivos não estão sendo monitorados pelo Git. Parabéns você acertou!");
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
  window.location="fase7.html";
};

