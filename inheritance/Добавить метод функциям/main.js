function f() {
    alert("hello");
}

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}

f.defer(1000)