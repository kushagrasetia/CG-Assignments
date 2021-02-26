var arr = [1, 3, 5, 4, 2];

function isEven(num) {
    return (num % 2 == 0);
}

function find(arr, isEven) {
    for (var i = 0; i < 5; i++) {
        if (isEven(arr[i]) == true)
            return arr[i];
    }
}

console.log(find(arr, isEven));