//https://www.codewars.com/kata/57a62154cf1fa5b25200031e/solutions/javascript
function alternateCase(s) {
  let arr = s.split('')
  let letters = arr.map((char)=>{
    if(char === char.toUpperCase()){
      return char.toLowerCase()
    }
    else{
       return char.toUpperCase()
    }
  })
  return letters.join('')
}
