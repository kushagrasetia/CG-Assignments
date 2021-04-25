function isEven(num) {
    return (num % 2 == 0);
}
var n = 0;

function find(arr, fns) {
    if (n < 5) {
        arr = arr.slice(n, n + 1);
        n += 1;
        return find(arr, fns);
    }

}
var arr = [1, 3, 5, 4, 2];
console.log(find(arr, isEven));