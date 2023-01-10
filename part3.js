// 1. 
aa = (f,s,t) => {
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

   // 2. 

let n = '123';
console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=parseInt(n[i])
 }
 return sum;
}

// 3. 

var arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i<arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})()

// 4. 

 arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

// 5. 

const newArray=[1,3,2,5,10,12,13];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++)
 {
    if(num%i===0)
    {
    return false;
    }
 }
 return num;
});
console.log(myPrime);

// 7. 

 arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function() {
 var out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

 // 8. 

  arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();

// 9. 

(function(str){
    var str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("guvigeekzenclass")

// 10. 

var res = function(arr){
    newArr = [];
    for(var i=0; i < arr.length; i++)
    {
     
      if(newArr.indexOf(arr[i].toLowerCase()) == -1) 
      {
        newArr.push(arr[i].toLowerCase());
      }
      else{
        delete newArr[newArr.indexOf(arr[i].toLowerCase())];
      }
    }
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])

   // 11. 

   var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 new_object = {}
 while(outer_remove.length!=0)
 {
  var inner_remove = outer_remove.shift()
  var key = inner_remove[0]
  var value =inner_remove[1]
  new_object[key]=value
 }
 final.push(new_object)
}
console.log(final);

// 12.

arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr);

// 13. 

var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a-c;
 }
 return a;});
console.log(s);


// 6. 

var numsArr = [ 10, 20, 30, 40,50,60,70,80,90,100];
var sum = 0;
for (var i = 0; i <=numsArr.length-1; i++) {
 sum += numsArr[i]
}
console.log(sum);


