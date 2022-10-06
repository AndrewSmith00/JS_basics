/* C использованием стрелочных функций:
function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}
*/ 
// Без использования стрелочных функций:
function defer(f, ms) {
    return function(...args) {
        let ctx = this.
        setTimeout(function() {
            return f.apply(ctx, args);
        }, ms);
    };
} 

let user = {
    name: "John",
    sayHi() {
        alert(`Hello, ${this.name}`);
    }
}

let sayHiDeferred = defer(user.sayHi(), 2000); 
sayHiDeferred()