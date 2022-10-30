
const flip=(d, a)=>{
  //TODO
  if(d=='L'){
    let gravityList= a.sort(function(a, b){return a - b}).reverse()
    return gravityList
  }else if(d=='R'){
    let gravityList= a.sort(function(a, b){return a - b})
    return gravityList
  }
}
