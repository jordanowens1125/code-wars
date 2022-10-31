// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]


function arrayDiff(a, b) {
    //for each item in list a
    for(let i=a.length;i>-1;i--){
      //check if it matches any items in list b
      for(let j=0;j<b.length;j++){
        if(a[i]==b[j]){
          //remove it
          console.log(a[i],b[j])
          a.splice(i, 1);
        }
      }
      
    }
   return a
}
