var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual comando para encontrar o commit que alterou algo no seu projeto?");
  if(comando == "git bisect"){
    alert("O " + comando + ", utilizado para encontrar o commit que alterou qualquer propriedade do seu projeto. Parabéns você acertou!");
    var comando2 = prompt("Qual comando que realiza uma função de comparação nas fontes de dados do Git?");
    if(comando2 == "git diff"){
      alert("O " + comando2 + ", multiuso que, quando executado, realiza uma função de comparação nas fontes de dados Git.. Parabéns você acertou!");
      var comando3 = prompt("Qual comando para localizar trechos de texto (strings)?");
      if(comando3 == "git grep"){
        alert("O " + comando3 + ", ele procura por trechos de texto dentro de arquivos ou diretórios e retorna para você em quais arquivos a string foi encontrada, inclusive mostrando a linha em que isso ocorreu. Parabéns você acertou!");
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
  window.location="fimdojogo.html";
};

