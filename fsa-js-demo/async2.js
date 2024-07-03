

function subtractAsync(a, b, cb) {
    setTimeout(() => {
        if (a === 0) {
            cb("Invalid input");
        } else {
            a--;
            b--;
            var result = a - b;
            cb(null, result);
        }
    }, 2000);
}

function handleResult(err, res) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
}

subtractAsync(20, 10, handleResult);
