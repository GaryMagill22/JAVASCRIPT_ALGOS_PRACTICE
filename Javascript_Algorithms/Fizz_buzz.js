//  if num divisable by 3 - "fizz"
//  if num divisable by 5 - "buzz"
//  if num divisable by 3 and 5 - "fizzBuzz"

function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            console.log("FizzBuzz")
        else if (i % 3 === 0)
            console.log("Fizz")
        else if (i % 5 === 0)
            console.log("Buzz")
        else console.log(i);
    }
}



console.log(fizzBuzz(20));