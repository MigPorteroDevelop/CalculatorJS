export default class {
    //Property that belongs to the class, not to each instance
    static numberList1 = [];

    constructor(operator) {
        this.operator = operator;
        if (isNaN(operator)) {
            this.type = 'evaluator';
        } else {
            this.type = 'number';
        }

        this.element = this.createElement();
        this.operation = this.createEvent();
    }
    createElement() {
        const element = document.createElement('button');
        element.classList.add('bg-white', 'border', 'border-black', 'rounded-md', 'text-center', 'text-lg', 'hover:bg-stone-100');

        element.innerText = this.operator;

        return element;
    }

    createEvent() {
        if (this.type == 'number') {
            this.element.addEventListener('click', () => {
                //First, reference to class, and then to property
                this.constructor.numberList1.push(this.operator);
                const concatedNumbers = this.constructor.numberList1.join('')
                //console.log(concatedNumbers);
            });
        } else if (this.type == 'evaluator') {
            // queremos calcular (retorna algo)
        } else {
            alert('Error: Unknown type');
        }


    }
}
