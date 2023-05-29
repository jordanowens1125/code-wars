

const sumSquareEvenRootOdd = ns => {
  // your code goes here
  const newNS = ns.map((num) => {
    if(num%2===0){
      return num**2
    }
    else{
      return num**(1/2)
    }
  })
  return +newNS.reduce((accumulator,currentVal) => accumulator + currentVal,0).toFixed(2)
};
