let num = +prompt("Müsbət ədəd daxil edin:")

function sumOfNumbers() {
    let sum = 0;
    let dividend = 100;
    

    while (dividend <= 999) {
        if ( dividend % num == 0) {
            sum = sum + dividend;
        }
        ++dividend;
    }

    console.log(`sum is ${sum}`)
}

sumOfNumbers()