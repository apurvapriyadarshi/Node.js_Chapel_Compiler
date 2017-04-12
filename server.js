var express= require('express');
var fs= require('fs');
var app=express();
var shell_escape=require('shell-escape');
const pug = require('pug');

/*app.get('/online.html',function(req,res) {
  res.sendFile( __dirname +"/"+ "online.html");
})
*/
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('mainpage.pug')
})

app.get('/form_get',function(req,res){
 //var input = document.getElementById('fname');
 //if(input.value.length == 0) input.value = "untitled.chpl";
 fs.writeFile(req.query.filename,req.query.codeeditor,null,function(err,data){
          if(err) throw err;
          else{
              	const exec = require('child_process').exec;
                var arg1=['chpl' , req.query.filename];
	         	     exec(shell_escape(arg1), (err, stdout, stderr) => {
  		            if (err) {
    			               console.error(err);
    			                 return;
      			               }
                var arg2=['./a.out'];
                exec(shell_escape(arg2), (err, stdout, stderr) => { 
                res.render('mainpage', { myOutput: stdout }) 
                
                });
                });   
              }
              
 });  
})

app.listen(8000,function(){
  console.log("Server UP");
})

