function helperFibonacci(n) {
    let number1 = 0; // 1
    let number2 = 1; // 2

    for (i = 0; i < n; i++) {
        let current = number1 + number2; //  1 + 2 = 3
        number1 = number2; // 1 
        number2 = current; // 2
        console.log(current); // 1 2 3
    }
}

helperFibonacci(3);