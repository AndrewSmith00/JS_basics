function work(a, b) {
    alert (a + b);
}

function spy(func) {

    function wrapper(...args) {
        wrapper.calls.push(args);
        let result = func.apply(this, arguments);
        return result;
    }

    wrapper.calls = [];
    return wrapper;
}

work = spy(work);

work(1, 2);
work(3, 4);

alert(work.calls[1])