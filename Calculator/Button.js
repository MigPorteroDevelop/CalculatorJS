export default class Button {

  constructor(parent, value) {
    this.calculator = parent;
    this.type = isNaN(value) ? 'evaluator' : 'number';

    if (this.type == 'number') {
      this.number = value;
    } else {
      this.evaluator = value;
    }

    this.element = this.createElement();
    this.createEvent();
  }

  createElement() {
    const element = document.createElement('button');
    element.classList.add('bg-white', 'border', 'border-black', 'rounded-md', 'text-center', 'text-lg', 'hover:bg-stone-100');
    element.innerText = (this.type == 'number') ? this.number : this.evaluator;
    return element;
  }

  createEvent() {
    this.element.addEventListener('click', () => {

      if (this.type === 'number') {
        this.calculator.currentNumbers += this.number;
        this.calculator.inputCurrent.innerText = this.calculator.currentNumbers;
        this.calculator.updateEvaluator();

      } else if (this.type === 'evaluator') {
        if (this.calculator.currentNumbers == '') return;

        this.calculator.inputResult.innerText = this.calculator.currentNumbers + ' ' + this.evaluator;
        this.calculator.arrayEval.push(this.calculator.currentNumbers);
        this.calculator.arrayEval.push(this.evaluator);

        this.calculator.updateEvaluator();

        this.calculator.currentNumbers = '';
        if (this.evaluator == '=') {
          this.calculator.inputCurrent.innerText = this.calculator.evaluate();
          this.calculator.resetCurrent();

        }

      } else {
        alert('Error: Unknown type');
      }
    });
  }
}
