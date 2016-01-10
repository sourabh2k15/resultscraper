var fs = require("fs");
var html = "";
var index = 0;
var pointer = "";
var name = "";
var start = 131114001;
var nameI;
var pointers = [];
var scholars = [];
var names = [];
function formfilename(scholar){
  return 'results/'+scholar+'.html';
}

function readresult(scholar){
  fs.exists(formfilename(scholar),function(exists){
    if(exists){
      fs.readFile(formfilename(scholar),"utf-8",function(err,data){
        if(err) console.log(err.message);
        html = data;
        name = "";
        pointer = "";
        index = html.indexOf('SGPA');
        nameI = html.indexOf("Name:");

        if(index>0){
          for(var i=105;i<135;i++)  name+=html[i+nameI];
          for(var i=15;i<19;i++)    pointer += html[i+index];

          names.push(name);
          pointers.push(parseFloat(pointer));
          scholars.push(parseInt(scholar));
        }
      });
    }
  });
}

console.log("started reading results into array!!");
for(var i=0;i<168;i++){
  readresult(i+start);
}

setTimeout(function(){
  var temp,sch,tname;
  for(var i=0;i<pointers.length;i++){
    for(var j=0;j<pointers.length-1-i;j++){
       if(pointers[j]>pointers[j+1]){
           sch  = scholars[j+1];
           temp = pointers[j+1];
           tname = names[j+1];

           scholars[j+1] = scholars[j];
           pointers[j+1] = pointers[j];
           names[j+1]    = names[j];

           scholars[j] = sch;
           pointers[j] = temp;
           names[j]    = tname;
       }
    }
  }
  //console.log(pointers[pointers.length-1]);
  var j=1;
  var body = "";
  for(var i=pointers.length-1;i>=0;i--){
    //console.log((j)+") "+scholars[i]+"  "+names[i]+"  "+pointers[i]);
    body += (j)+") "+scholars[i]+"  "+names[i]+"  "+pointers[i]+"\ni have";
    j++;
  }

  fs.writeFile('pointerdistribution.txt',JSON.stringify(pointers),function(){
    console.log("successfully written to pointer distribution file!");
  })
  /*
    uncomment to write sorted results to file .
    fs.writeFile('results.txt',body,function(){
      console.log("sorted order written to results!!");
    });
  */
},3000);
