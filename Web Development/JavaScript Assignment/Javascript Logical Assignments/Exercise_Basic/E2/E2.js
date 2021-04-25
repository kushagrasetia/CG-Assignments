function max(a, b, c) {
    if (a > b) {
        if (a > c)
            console.log(a);
        else
            console.log(c);
    } else {
        if (b > c)
            console.log(b);
        else
            console.log(c);
    }
}
max(1, 2, 3);
max(1, 3, 2);
max(3, 2, 1)