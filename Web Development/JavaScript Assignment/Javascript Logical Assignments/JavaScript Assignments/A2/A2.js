var a = [];
while (a.length != 3) {
    let t = parseInt(prompt("input:"));

    if (t >= 1 && t <= 30) {
        a.push(t);
    }

}
for (var j = 0; j < 3; j++) {

    console.log("*".repeat(a[j]));
}