const square = function(num){
    return num*num;
}
let n = prompt("Enter the number of which the squareyou want");
document.getElementById("square").innerHTML = "The square of given number is: " + square(n);
console.log(`The square is ${square(n)}`);
