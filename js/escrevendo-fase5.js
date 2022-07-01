var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("?");
  if(comando == "git rebase"){
    alert("O " + comando + ", . Parabéns você acertou!");
    var comando2 = prompt("?");
    if(comando2 == "git reset"){
      alert("O " + comando2 + ", . Parabéns você acertou!");
      var comando3 = prompt("?");
      if(comando3 == "git switch"){
        alert("O " + comando3 + ", . Parabéns você acertou!");
        var comando4 = prompt("?");
        if(comando4 == "git tag"){
          alert("O " + comando4 + ", . Parabéns você acertou!");
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

