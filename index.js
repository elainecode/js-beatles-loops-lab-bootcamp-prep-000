// add solution here

function theBeatlesPlay(musc, instr){
  var arr = [];
  for(var i = 0; i < musc.length; i++){
    var str = musc[i] + "plays " + instr[i];
    arr.push(str);
  }
  return arr;
}
 function iLoveTheBeatles(n){
   var arr = [];
   do{
     arr.push("I love the Beatles!");
     n++;
   } while(n < 15)
   return arr;
 } 


 function johnLennonFacts(facts){
   var i = 0;
   var arr =[];
   while( i < facts.length){
     arr.push(facts[i] + "!!!")
     i++;
   }
   return arr;
 }

 function iLoveTheBeatles` which accepts a number as a parameter. The
body of the function should create a variable that stores an empty array. Then,
implement a do-while loop inside the function that adds `"I love the Beatles!"`
to the empty array. Then the loop should increment the number passed in as a
parameter. The condition of the loop should check to see that the parameter
number is less than `15`. The function should return the array with the strings
`"I love the Beatles!"`.