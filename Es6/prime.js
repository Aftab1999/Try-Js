function isFactor(n, i) {
    return n % i === 0;
}

function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (isFactor(n, i)) count++;
    }
    return count === 2;
}

console.log(isPrime(16)); // Output: false
console.log(isPrime(17)); // Output: true
