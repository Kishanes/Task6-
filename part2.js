// 1. 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
 new_string += numsArr[i] 
}
console.log(new_string);

// 2. 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) {
  if(i!=numsArr.length-1){
 new_string += numsArr[i] + "," 
  }
  else{
  new_string += numsArr[i]
  }
}
console.log(new_string);

// 3. 

3.
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

 
for (var i = numsArr.length-1; i >= 0; i -- ) {
 new_string += numsArr[i] + " "
}
console.log(new_string.trimEnd());

// 4. 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length-1; i++) {
 if(numsArr[i] %2 == 0 )
 {
 numsArr[i] = "even"
 }
}
console.log(numsArr);

//5. 
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=numsArr.length-1; i++) {
    if(i %2 == 0 )
    {
    numsArr[i] = "even"
    }
   }
   console.log(numsArr);

// 6. 

   var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <=numsArr.length-1; i++) {
 sum += numsArr[i]
}
console.log(sum);

//7. 

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i]
 }
}
console.log(sum);

//8. 

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=numsArr.length-1; i++) {
 if(numsArr[i]%2==0)
 {
    sum += numsArr[i]
 }
 else
 {
    sum -= numsArr[i]
 }
}
console.log(sum);

// 9. 

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
 console.log(numsArr[i])
}

// 10.
 
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);

// 11.

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
 
      if(j %2 == 0 )
      {
         numsArr[i][j] = 'even';
       }
}
console.log(numsArr);

// 12. 
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = numsArr.length-1; i >= 0 ; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=inner_array[j]+' '
}
console.log(str_all.trimEnd());

// 13. 

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
  if(inner_array[j]%2!=0)
  {
     sum_odd += inner_array[j]
  }
  else
  {
      sum_even += inner_array[j]
  }
}
}
console.log(sum_odd);
console.log(sum_even);
