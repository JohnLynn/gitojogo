var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual o comando que exibe as condições do diretório de trabalho?");
  if(nome == "git status"){
    alert("O " + nome + ", exibe as condições do diretório de trabalho e da área de staging. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  }
  window.location="fase5.html";
};

