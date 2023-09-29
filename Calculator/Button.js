export default class Button {
    static numberList1 = [];
    static numberList2 = [];
    static operatorList = "";

    constructor(operator) {
        this.operator = operator;
        this.type = isNaN(operator) ? 'evaluator' : 'number';
        this.element = this.createElement();
        this.createEvent();
    }

    createElement() {
        const element = document.createElement('button');
        element.classList.add('bg-white', 'border', 'border-black', 'rounded-md', 'text-center', 'text-lg', 'hover:bg-stone-100');
        element.innerText = this.operator;
        return element;
    }

    createEvent() {
        this.element.addEventListener('click', () => {
            if (this.type === 'number') {
                Button.numberList1.push(this.operator);
                const concated1 = Button.numberList1.join("");
                console.log(concated1);
            } else if (this.type === 'evaluator') {
                Button.operatorList = this.operator;
                console.log(Button.operatorList);
                if (Button.numberList1.length > 0 && Button.operatorList !== "" && !isNaN(this.operator)) {
                    Button.numberList2.push(this.operator);
                    const concated2 = Button.numberList2.join("");
                    console.log(concated2);
                }
            } else {
                alert('Error: Unknown type');
            }
        });
    }
}
