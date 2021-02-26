function square(x) {
    return x * x;
}

function map(array, fns) {
    var arr = []
    for (var i = 0; i < 5; i++) {
        arr.push(fns(array[i]));
    }
    return arr;
}
console.log(map([1, 3, 5, 8, 9], square));
console.log(map([1, 81, 9, 36, 16], Math.sqrt));