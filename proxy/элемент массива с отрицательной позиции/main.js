let arr = [1, 2, 3];

arr = new Proxy(arr, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = +prop + target.length
        }
        return  Reflect.get(...arguments);
    }
})

alert(arr[-1])