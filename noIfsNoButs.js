//https://www.codewars.com/kata/592915cc1fad49252f000006/solutions/javascript

function noIfsNoButs(a, b) {
  let val = a -b
  switch(true){
      case (val>0):
      return `${a} is greater than ${b}`;
      break;
      case (val<0):
      return `${a} is smaller than ${b}`;
      break;
      default:
       return `${a} is equal to ${b}`;
  }
}
