//https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript
function getCount(str) {
  let count = 0
  let arr = str.split('')
  for (let i =0; i < arr.length;i++){
    switch(arr[i]){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          count++
          break;
        default:
          break;
    }
  }
  return count;
}
