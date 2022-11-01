//https://www.codewars.com/kata/5842df8ccbd22792a4000245/solutions/javascript
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  // Your code here
  let string =''
  let countPlacement =0
  num = num.toString()
  let expanded =[]
  for(let i=num.length-1;i>-1;i--){
    let addedZeros = '0'
    let addedString = num[i]+addedZeros.repeat(countPlacement)
    countPlacement +=1
    expanded.push(addedString)
  }
  let result =[]
  for(let i=expanded.length-1;i>-1;i--){
    if(parseInt(expanded[i])==0){
      
    }else{
      result.push(expanded[i])
    }
  }
  //result.join('+')
  return (result.join(' + '))
}
