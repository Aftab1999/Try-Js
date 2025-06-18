const Reverse = str => {
    let reverse = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    console.log("Reverse String is", reverse)
}

Reverse("Aftab Ahmed Ansari")