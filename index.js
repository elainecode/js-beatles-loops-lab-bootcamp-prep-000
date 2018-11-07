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
 } 