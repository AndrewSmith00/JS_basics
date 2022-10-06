let user = {
    name: "John",
    _password: "***"
};

user = new Proxy(user, {
    get(target, prop) {
        if(prop.startsWith('_')) {
            throw new Error("Отказано в доступе");
        } else {
            let value = target[prop];
            return (typeof value === 'function') ? value.bind(target) : value;
        }
    },
    set(target, prop, value) {
        if (prop.startsWith('_')) {
            throw new Error("Отказано в доступе");
        } else {
            target[prop] = value;
            return true;
        }
    },
    deleteProperty(target, prop) {
        if(prop.startsWith('_')) {
            throw new Error("Отказано в доступе");
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key = !key.startsWith('_'));
    }
})