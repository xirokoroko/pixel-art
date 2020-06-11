window.onload = function(){
    this.console.log("It's alive!");
    let container = document.querySelector('#canvas')
    let currentColor = 'red';

    container.style.display = 'grid';
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)'
  
    for(let i = 0; i < 400; i++) {
      let box = document.createElement('span');
      box.style.border = '1px solid white';
      box.style.backgroundColor = 'aquamarine';
      box.style.height = '8px'
      box.style.width = '8px';

      box.addEventListener('click', function(event){
        box.style.backgroundColor = currentColor;
      });
   
      container.appendChild(box);
    }
    let pallet = document.querySelector('#pallet')
    pallet.style.display = 'grid';
    pallet.style.gridTemplate = 'repeat(1, 1fr) / repeat(6, 1fr)'
    pallet.style.width = '60px'
    let colorChoices = ['red','lime','yellow','orange','blue','pink'];
    for (let color of colorChoices) {
        let colorSelection = document.createElement('span');
        colorSelection.style.border = '1px solid white';
        colorSelection.style.backgroundColor = color;
        colorSelection.style.height = '8px'
        colorSelection.style.width = '8px';
        pallet.appendChild(colorSelection)
    
        colorSelection.addEventListener('click', function(event){
            currentColor=colorSelection.style.backgroundColor;
          }); 
    
    }
  
    document.body.appendChild(container);
  }
  

 