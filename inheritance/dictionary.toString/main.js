/*
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});
*/
let dictionary = Object.create(null);
Object.defineProperties(dictionary, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }

})

dictionary.apple = "Apple";
dictionary._proto_ = "test";

for (let key in dictionary) {
    alert(key);
}

alert(dictionary);