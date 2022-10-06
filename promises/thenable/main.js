class Thenable {
    constructor(num) {
        this.num = num;
    }

    then(resolve, reject) {
        alert(resolve);

        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
        return new Thenable(result);
    })
    .then(alert);