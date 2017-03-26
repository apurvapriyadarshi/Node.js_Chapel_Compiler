var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');
var spawn = require('child_process').spawn;

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        processAllFieldsOfTheForm(req, res);
    }

});

function displayForm(res) {
    fs.readFile('online.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function processAllFieldsOfTheForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        fs.writeFile('code/fi.chpl',fields.codeeditor,null,function(error,data){
          if(error) throw error;
           else {  const exec = require('child_process').exec;
exec('chpl code/fi.chpl', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  exec('./a.out', (err, stdout, stderr) => { console.log(stdout);
  
});
});

                
                }
            
	});
       
    });
}

server.listen(1185);
console.log("server listening on 1185");
