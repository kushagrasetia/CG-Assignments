var add = function (a, b) {
    if (a === void 0) { a = 5; }
    if (b === void 0) { b = 10; }
    console.log(a + b);
};
add();
console.log("**********");
var userFriends = function (username) {
    var friends = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        friends[_i - 1] = arguments[_i];
    }
    console.log(username);
    for (var i in friends) {
        console.log(friends[i]);
    }
};
userFriends("Rahul", "Ram", "Sita", "Manisha");
userFriends("Neha", "Shyam", "Garima");
console.log("**********");
var printCpitalNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var j in names) {
        var name1 = names[j].toUpperCase();
        console.log(name1);
    }
};
var names = ["rohit", "sagar", "gagan", "manpreet", "jaskaran"];
printCpitalNames.apply(void 0, names);
