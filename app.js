var express = require('express'); 
var app = express(); 

app.get('/', function (req, res) { 
    res.send('This is my app. '); 
}); 

app.listen(3000, function () { 
    console.log('myApp is listening on port 3000.'); 
}); 