let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adios'
};

dictionary = new Proxy(dictionary, {
    get(target, phrase) {
        if (phrase in target) {
            return target[phrase];
        }
        else {
            return phrase;
        }
    }
})

alert( dictionary['Hello'] );
alert( dictionary['Welcome'] );