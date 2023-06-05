//https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {
  if (str.trim()==='') return false
  str = str.split(' ')
  for(let i=0; i<str.length;i++){
    str[i] = capitalizeFirstLetter(str[i])
  }
  
  str=str.join('')
  if(str.length>139) return false
  return '#'+str
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
