function calculate(a, b, operator) {
    if (operator == "+") {
        console.log(a+b);
    } else if (operator == "-") {
        console.log(a-b);
    } else if (operator == "*") {
        console.log(a*b);
    } else if (operator == "/") {
        console.log(a/b);
    }
}

calculate.apply(null, [2, 3, "+"]);