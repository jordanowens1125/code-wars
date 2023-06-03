//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/solutions/javascript
var number=function(array){
  //your awesome code here
  if(array.length === 0) return array
  for(let i =0; i < array.length; i++){
    array[i] = `${i+1}: ${array[i]}`
  }
  return array
}
