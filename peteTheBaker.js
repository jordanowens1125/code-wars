//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript
function cakes(recipe, available) {
  let nums = []
  let keys = Object.keys(recipe)
  for(let i =0; i < keys.length;i++ ){
    let ingredient = keys[i]
    if(available[ingredient]){
      nums.push(Math.floor(available[ingredient]/recipe[ingredient]))
    }
    //if needed ingrediant is not in available
    else return 0
  }
  return Math.min(...nums)
}
