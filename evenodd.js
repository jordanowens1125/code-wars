//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if(Number.isInteger(number/2)){
    return 'Even'
  }else{
    return 'Odd'
  }
}
