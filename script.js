const inputs = [...document.querySelectorAll('input')];

let lastInputChecked;

function handleClick(e) {

  let inBetween = false;
  
  if (e.shiftKey && this.checked) {
    inputs.forEach((input) => {
  
      if(input === this || input === lastInputChecked) {
        
        inBetween = !inBetween;
  
      }
  
      if(inBetween) {
        input.checked = true;
      }
      
    });
  }


  lastInputChecked = this;
}

inputs.forEach((item) => {
  item.addEventListener('click', handleClick)
})