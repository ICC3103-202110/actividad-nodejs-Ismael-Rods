function fibonacci(n){
   if (n==0)
        return 0;
   if (n==1)
        return 1;
   return fibonacci(n-1) + fibonacci(n-2)
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Enter a number:', number => {
    console.log(`F(${number}) = `+ fibonacci(number));
    readline.close();
  });