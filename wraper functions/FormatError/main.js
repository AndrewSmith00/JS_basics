class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("Ошибка формтирования");

alert( err.message);
alert( err.name );
alert( err.stack );

alert( err instanceof FormatError);
alert( err instanceof SyntaxError);