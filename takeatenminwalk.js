//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
2
  //insert brilliant code here
3
  if(walk.length!==10){
4
    return false
5
  }
6
  
7
  else{
8
    let up = 0
9
  let right = 0
10
    for(let i =0; i< walk.length;i++){
11
      switch(walk[i]){
12
          case 'n':
13
          up++;
14
          break;
15
          case 's':
16
          up--;
17
          break;
18
          case 'w':
19
          right--;
20
          break;
21
          case 'e':
22
          right++;
23
          break;
24
          default:
25
          break;
26
      }
27
    }
28
    if(up ===0 && right ===0){
29
      return  true
30
    }
31
  }
32
  return false
33
}
 Good Job! You may take
