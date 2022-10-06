let worker = {
    slow(...values) {
        return Array.from(values).reduce((sum, current) => sum + current, 0);
    }
};

function hash() {
    return [].join.call(arguments);
}

function cachingDecorator(func) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        
        if (cache.has(key)) {
            return `Again ` + cache.get(key);
        }

        let result = func.apply(this, arguments);
        cache.set(key, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);

alert(worker.slow(1, 2, 3, 4, 5));
alert(worker.slow(1, 2, 3, 4, 5));