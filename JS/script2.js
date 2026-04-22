function isPrime(num) {
    let divisor = 2;
  
    while (divisor < num) {
      if (num % divisor == 0) {
        return false;
      }
      divisor++;
    }
  
    return true;
  }
  
  let n = prompt("n tam ededini daxil et:");
  
  while (n >= 2) {
    if (isPrime(n)) {
      console.log(n);
    }
    n--;
  }