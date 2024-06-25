// function fib(n){
//     var f0=0;
//     var f1=1;
//     for (var i=0;i<n;i++){
//         var sum=f0+f1 // 3   f0 = 2 ; f1 = 3
//         f0=f1 
//         f1=sum
//         console.log(sum) // sum 2 
//     }

// }
// fib(10)

function fib(n){
    let f0= 0;
    let f1= 1;
    for(let i = 0; i<n; i++){

    let sum= f0 + f1;
    f0=f1;
    f1=sum;
    console.log(sum)
    }

}
fib(10);