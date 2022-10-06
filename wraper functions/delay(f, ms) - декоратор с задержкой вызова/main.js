function f(x) {
    alert(x);
}

function delay(func, ms) {
    
    return function() {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}