let numbers = [];

numbers = new Proxy(numbers, {
    set(target, prop, value) {
        if (typeof value == "number") {
            target[prop] = value;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1);
numbers.push(2);

alert("Длина: " + numbers.length);

numbers.push("...");

alert("test");