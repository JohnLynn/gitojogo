var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual o comando para salvar as mudanças do projeto no momento?");
  if(nome == "git commit -m"){
    alert("O " + nome + ", salva as mudanças considerados versões 'seguras' de um projeto. Parabéns você acertou!");
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  }
  window.location="fimdojogo.html";
};

