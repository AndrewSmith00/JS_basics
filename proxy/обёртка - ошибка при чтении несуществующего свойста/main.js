let user = {
    name: "John"
}

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(...arguments);
            }
            else {
                throw new ReferenceError(`No such property: ${prop}`);
            }
        }
    });
}

user = wrap(user);

alert(user.name);
alert(user.age);