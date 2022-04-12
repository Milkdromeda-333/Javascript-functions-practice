function sum(num1, num2) {
    return num1 + num2
}
console.log(sum(5, 5)) // returns 10

// 2. Write a function that takes a string such has "Joe" as an argument, and returns the string "Hello Joe" ( Hint: Look up string concatenation )
var greet = (name) => {
    return `Hello, ${name}.`
}
console.log(greet('Anjo')) // retuns Hello, Anjo.
// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.
function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "It's an even number."
    } else {
        return "It's an odd number"
    }
}
console.log(evenOrOdd(5)) // returns It's an odd number
