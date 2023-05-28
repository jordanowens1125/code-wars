//https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string){
  //TODO Have fun :)
  const words = string.split(' ')
  const results = words.map((word)=>{
    if(word.length<5){
      return word
    }
    else{
      return word.split("").reverse().join("");
    }
  })
  return results.join(' ')
}
