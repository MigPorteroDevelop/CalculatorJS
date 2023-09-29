import Button from "./Button.js";
const numbers = Button.numberList1;

export default class {
  constructor(element) {
    this.element = element;
    this.numbers = numbers;
    this.currentOperation = 0;
    this.currentResult = 0;
    this.inputEvaluator = this.createInputEvaluator();
    this.listButtons = this.createButtons();
    this.createEvents = this.createEvents();
  }

  createInputEvaluator() {
    const container = document.createElement("div");
    const inputCurrent = document.createElement("input");
    const inputResult = document.createElement("div");

    container.classList.add("mb-4");
    inputCurrent.classList.add("showOperations", "relative", "block", "w-full", "text-right", "overflow-hidden", "border-b", "border-gray-400", "bg-white", "pt-3", "focus:border-blue-500", "focus:outline-none", "focus:ring-2", "focus:ring-blue-200");
    inputResult.classList.add("relative", "block", "w-full", 'h-10', "text-right", "overflow-hidden", "border-b", "border-gray-400", "mb-2", "bg-white", "pt-3", "focus-within:border-blue-600");

    container.append(inputCurrent);
    container.append(inputResult);

    this.inputResult = inputResult;
    this.inputCurrent = inputCurrent;

    this.element.append(container);
  }
  
  createButtons() {
    const arrayButtons = [7, 8, 9, `%`, 4, 5, 6, `x`, 1, 2, 3, `-`, 0, `.`, `=`, `+`];
    const container = document.createElement("div");
    container.classList.add("grid", "grid-cols-4", 'gap-1');

    let list = [];

    for (let i = 0; i < arrayButtons.length; i++) {
      const button = new Button(arrayButtons[i]);

      container.append(button.element);
      list.push(button);
    }

    this.element.append(container);

    return list;
  }
  
  createEvents() {
    //const showOperations = document.getElementsByClassName("showOperations")
    if (Array.isArray(this.numbers) && this.numbers.length == 0) {
      console.log("El array está vacío");
      console.log(this.numbers)
    } else {
      console.log("El array no está vacío");
    }
    /* iterar o recorre los botones(this.listButtons) 
      por cada boton, vas a ejetura buton.operation()

      this.inputCurrent concatenas o ejecutas el operador.

      tip: eval('evalua un string, ejemplo: 22+5 77*xxxx')

      this.inputCurrent.innerText = el concatenada (this.curretOperation)
      this.inputResult.innerText = la evlauacion (this.curretResult)
    */
  }
}