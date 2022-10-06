/*
function printNumbers(from, to) {
    let value = from;
    
    let timerId = setInterval(function () {
        alert(value);
        if (value == to) {
            clearInterval(timerId);
        }
        value++;
    },  1000);
}
*/

function printNumbers(from, to) {
    let value = from;

    setTimeout(function go() {
        alert(value);

        if (value < to) {
            setTimeout(go, 1000);
        }

        value++;
    }, 1000)
}

printNumbers(1, 5);