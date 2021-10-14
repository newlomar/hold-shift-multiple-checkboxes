const inputs = [...document.querySelectorAll('input')];

function handleClick(e) {
  if (!e.shiftKey) return;

  let indexClick = inputs.indexOf(e.target);


  let lastCheckedInputIndex = -1;

  for(let i = indexClick; i < inputs.length; i++) {

    if (inputs[i].checked) {
      lastCheckedInputIndex = i;
    }

  }

  console.log(lastCheckedInputIndex)

  if (lastCheckedInputIndex !== -1) {
    
    for(let i = indexClick + 1; i < lastCheckedInputIndex; i++) {

      inputs[i].checked = true;
      
    }

  }

}

inputs.forEach((item) => {
  item.addEventListener('click', handleClick)
})