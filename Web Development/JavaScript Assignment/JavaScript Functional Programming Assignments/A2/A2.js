function square(x) {
    return x * x;
}

function double(x) {
    return x * 2;
}

function compose(f1, f2) {
    return newfun(8);
}

function newfun(value) {
    return square(double(value));
}
console.log(compose(square, double));