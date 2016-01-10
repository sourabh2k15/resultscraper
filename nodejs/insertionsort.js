var arr = [5,6,4,7,6];
var t;

function display(arr){
  console.log(arr);
}

function sort(arr){
  for(var i=0;i<arr.length-1;i++){
     for(var j=0;j<arr.length-i;j++){
       if(arr[j]>arr[j+1]){
         t = arr[j];
         arr[j] = arr[j+1];
         arr[j+1] = t;
       }
     }
     display(arr);
  }
}

display(arr);
sort(arr);
