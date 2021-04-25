var strings = ["1.2", "2.3", "3.4"];

function numberArray(str) {
    return str.map(i => Number(i));
}
var nums = numberArray(strings);
console.log(nums);