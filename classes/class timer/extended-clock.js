class Clock {
    constructor({template}) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', seconds);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor(options) {
        super(options)
        let { precision = 1000} = options;
        this.precision = precision;
    }

    set precision(value) {
        if (value < 0) {
            alert("Error: precision can not be less then 0");
            return;
        }
        
        this._precision = value;
    }

    get precision() {
        return this._precision;
    }

    start() {
        super.render();
        this.timer = setInterval(() => super.render(), this.precision);
    }
}


let extendedClock = new ExtendedClock({template: 'h:m:s', precision: 3000});
extendedClock.start();