//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
  let result = ''
  text = text.toUpperCase()
  text = text.split('')
  for(let i =0; i<text.length;i++){
    let val = text[i].charCodeAt(0)
    if(val>64&&val<91){
      result += val-64+ ' '
    }
  }
  return(result.trim())
}
