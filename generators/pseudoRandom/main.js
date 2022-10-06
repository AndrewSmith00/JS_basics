function* pseudoRandom(seed) {
    let res = seed * 16807 % 2147483647;
    while(true) {
        yield res;
        res = res * 16807 % 2147483647;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);