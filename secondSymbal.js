//https://www.codewars.com/kata/63f96036b15a210058300ca9/solutions/javascript
function secondSymbol(s, symbol) {
  // your code
  let index = -1
  let count = 0
  for (let i = 0; i< s.length;i++){
    if(s[i]===symbol){
      count++
      if (count === 2){
        return i
      }
    }
  }
  return index
}
