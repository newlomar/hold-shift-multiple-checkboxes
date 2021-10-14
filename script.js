const inputs = [...document.querySelectorAll('input')];

function handleClick(e) {
  if (!e.shiftKey) return; // para checar se a tecla shift está clicada. Se não estiver, a função termina 

  let indexClick = inputs.indexOf(e.target);


  let lastCheckedInputIndex = -1; // apenas uma formalização, pois para essa função funcionar necessariamente haverá um input clicado, seguindo a lógica da primeira linhda da função, que no momento que esse comentário foi digitado era: "if (!e.shiftKey) return;"

  inputs.forEach((input, index) => {

    if (input.checked) {
    
      lastCheckedInputIndex = index;

    }

  })

  for(let i = lastCheckedInputIndex; i > indexClick ; i--) {
  
    inputs[i].checked = true;

  }



  if (lastCheckedInputIndex === indexClick) { //se o index do último input clicado é o mesmo index do click atual, então deve-se fazer o loop de trás pra frente para obter a posição do primeiro input com checked
  
    let firstCheckInputIndex = -1 // novamente, apenas uma formalização

    //para encontrar o index do primeiro input com click
    for(let i = inputs.length - 1; i >= 0; i--) {

      if (inputs[i].checked) {

        firstCheckInputIndex = i

      }

    }

    for(let i = firstCheckInputIndex; i < lastCheckedInputIndex ; i++) {
  
      inputs[i].checked = true;
  
    }    

  } 

}

inputs.forEach((item) => {
  item.addEventListener('click', handleClick)
})