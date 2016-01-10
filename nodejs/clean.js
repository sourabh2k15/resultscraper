/*
 This code cleans all the shit from the scraped html results by deleting the one's for non-existent scholars :)
*/

var fs = require("fs");
var html = "";
var index = 0;
var pointer = "";
var start = 131114001;
var delkey =0;
var found  =0;

function formfilename(scholar){
  return 'results/'+scholar+'.html';
}

function readresult(scholar){
  console.log('\n');
  fs.readFile(formfilename(scholar),"utf-8",function(err,data){
    if(err) console.log(err.message);
    html = data;
    index = html.indexOf('SGPA');
    found = html.indexOf('Scholar No. not found');
    if(found>0){
      fs.unlink(formfilename(scholar),function(){
        console.log("deleting clutter for scholar :"+scholar);
      });
    }
    if(index>0){
      pointer = "";
      for(var i=index+15;i<index+19;i++){
        pointer += html[i];
      }
      //console.log(pointer+'\n');
    }
  });
}

for(var i=start;i<start+168;i++){
    readresult(i);
}
