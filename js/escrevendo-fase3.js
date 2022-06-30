var button = document.querySelector("button");

button.onclick = function aula3() {
  var nome = prompt("Qual é o comando que permite verificar as conexões estabelecidas com um ou mais repositórios?");
  if(nome == "git remote"){
    alert("O " + nome + ", serve para criar uma conexão com um repositório. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  }
  window.location="aula4.html";
};

