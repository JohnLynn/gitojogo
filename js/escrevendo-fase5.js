var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual o comando que adiciona um arquivo ao diretório de trabalho?");
  if(nome == "git add"){
    alert("O " + nome + ", adiciona uma alteração no diretório ativo à área de staging. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  }
  window.location="fase6.html";
};

