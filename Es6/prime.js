function isFactor(n, i){
    return n % i === 0;
}

function isprime(n){
    var count = 0;
    for(var i = 0; i<=n; i++){
        if (isFactor(n, i))) count++;
    
 }
 return count === 2;
 if (count === 2) 
}
 console.log(isprime(16));
