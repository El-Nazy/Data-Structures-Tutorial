function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}

let start = 1, end = 1000;

for (let i = start; i <= end; i++) {
    console.log(i, "-", factorial(i));
}