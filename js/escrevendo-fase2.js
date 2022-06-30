var button = document.querySelector("button");

button.onclick = function () {
  var  comando = prompt("Qual é o comando que permite verificar as conexões estabelecidas com um ou mais repositórios?");
  if(comando == "git remote"){
    alert("O " + comando + ", gera uma lista de conexões existentes. Parabéns você acertou!");
    
    var comando2 = prompt("Qual é o comando que permite criar uma conexão com um repositório?");
    if(comando2 == "git remote add"){
    alert("O " + comando2 + ", serve para criar uma nova conexão com um repositório. Parabéns você acertou!");
    }else{
     alert("Infelizmente você errou! Vamos tentar novamente?");
      return;
    }
  }else{
    alert("Infelizmente você errou! Vamos tentar novamente?");
    return;
  } 
  window.location="fase3.html";
};

