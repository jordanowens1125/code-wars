// Your task is to make two functions ( `max` and `min`, or `maximum` and `minimum`, etc., 
// depending on the language ) that receive a list of integers as input, 
// and return the largest and lowest number in that list, respectively.

var min = function(list){
    let result =10000000
    for(let i=0;i<list.length;i++){
      if (list[i]<result){
        result=list[i]
      }
    }
    return result;
}

var max = function(list){
    let result =0
    for(let i=0;i<list.length;i++){
      if (list[i]>result){
        result=list[i]
      }
    }
    return result;
}
