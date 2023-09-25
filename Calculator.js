export class Calculator {

  buttonOperators() {
    const containerButtons = document.getElementById('containerButtons');
    const arrayButtons = [7, 8, 9, `%`, 4, 5, 6, `x`, 1, 2, 3, `-`, 0, `.`, `=`, `+`]

    for (let i = 0; i < arrayButtons.length; i++) {
      const button = document.createElement('button')
      button.innerHTML = arrayButtons[i]
      containerButtons.appendChild(button);
    }
  }

  showButtons() {
    //Save the selected buttons in a variable, and with "..." transform them into an array.
    const buttonList = [...document.querySelectorAll('div.containerButtons > button')];

    function asignListener(button){
      button.addEventListener("click", function(){
        if (!isNaN(parseInt(button.textContent))){
          const intButton = parseInt(button.textContent);
          const myInput = document.getElementById('showOperations')
          myInput.value = intButton;
        }else if(isNaN(parseInt(button.textContent))) {
          const intButton = button.textContent;
          const myInput = document.getElementById('showOperations')
          myInput.value = intButton;
        }
      })
    }

    for (let i = 0; i < buttonList.length; i++) {
      asignListener(buttonList[i])
    }
  }
}

// You must always create an instance and call the function to display it.
const calculator = new Calculator();
calculator.buttonOperators();
calculator.showButtons();
