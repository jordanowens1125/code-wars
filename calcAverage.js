//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/solutions/javascript
function findAverage(array) {
  // your code here
  if (array.length===0) return 0
  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue,
  0
);
  return sum/array.length;
}
