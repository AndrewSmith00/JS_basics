let worker = {
    someValue: 1,
    someMethod() {
        return this.someValue
    },
    slow(x) {
        return x * this.someMethod();
    }
}

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); 

alert(worker.slow(2));
alert(worker.slow(2));