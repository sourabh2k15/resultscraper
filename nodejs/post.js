

var request = require("request");
var fs = require("fs");

var scholar_num = 131114001;
var semester=5;

function formobject(scholar,sem){
  var formdata = { scholar:scholar,semester:sem};
  return formdata;
}

function formfilename(scholar){
  return 'results/'+scholar+'.html'
}

//console.log(formobject(131114141,5));

var stopkey = 0;

function attack(){
  if(stopkey==0){
  request.post(
    'http://dolphintechnologies.in/manit/accessview.php',
    {form: formobject(scholar_num,semester)},
    function(err,res,body){
        if(err||res.statusCode!=200){
           console.log("trying again");
           attack();
        }else{
          fs.writeFile(formfilename(scholar_num),body,function(err){
            if(err) console.log("err occurred while writing to file");
            scholar_num++;
            setTimeout(attack,0);
            console.log("written to file successfully!!");
          });
        }
      }
    );
  }
}

attack();
