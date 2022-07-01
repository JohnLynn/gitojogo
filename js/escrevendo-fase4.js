var button = document.querySelector("button");

button.onclick = function () {
  var comando = prompt("Qual comando para imprimir uma lista de ramificações criadas?");
  if(comando == "git branch"){
    alert("O " + comando + ", permite que você visualize as ramificações existentes em seu projeto. Parabéns você acertou!");
    var comando2 = prompt("Qual comando para excluir um ramo, caso o mesmo tenha terminado seus trabalhos?");
    if(comando2 == "git branch -d"){
      alert("O " + comando2 + ", excluirá o branch local somente se você tiver feito o push e o merge. Parabéns você acertou!");
      var comando3 = prompt("Qual comando para excluir um ramo, mesmo que ele não tenha finalizado seus trabalhos?");
      if(comando3 == "git branch -D"){
        alert("O " + comando3 + ", forçar a exclusão do branch, mesmo que você ainda não tenha feito o push e o merge com ele. Parabéns você acertou!");
        var comando4 = prompt("Qual comando para navegar entre branches?");
        if(comando4 == "git checkout"){
          alert("O " + comando4 + ", faz a troca entre branches ou restaura arquivos da árvore de trabalho. Parabéns você acertou!");
          var comando5 = prompt("Qual comando para visualizar alterações pendentes?");
          if(comando5 == "git commit"){
            alert("O " + comando5 + ", imprime uma lista com as alterações não preparadas para confirmação. Parabéns você acertou!");
            var comando6 = prompt("Qual comando para salvar alterações pendentes?");
            if(comando6 == "git commit -m"){
             alert("O " + comando6 + ", salva as mudanças considerados versões 'seguras' de um projeto. Parabéns você acertou!");
             var comando7 = prompt("Qual comando para unificar as linhas de desenvolvimento em uma ramificação única?");
             if(comando7 == "git merge"){
               alert("O " + comando7 + ", unifica alterações criadas pelo git branch e as integra em uma ramificação única. Parabéns você acertou!");
               
             }else{
               alert("Infelizmente você errou! Volte 7ª casas.");
               return;
             }
            }else{
              alert("Infelizmente você errou! Volte 6ª casas.");
              return;
            }
          }else{
            alert("Infelizmente você errou! Volte 5ª casas.");
            return;
          }
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
  window.location="fase5.html";
};

