function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };
    this.calculate = function(str) {
        let expr = str.split(' ');
        a = +expr[0];
        b = +expr[2];
        op = expr[1];

        if (!(this.methods[op]) || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(op, func) {
        this.methods[op] = func;
    }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") );

calc.addMethod("*", (a, b) => a * b);

alert( calc.calculate("2 * 3") );