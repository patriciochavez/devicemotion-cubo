var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.sendFile('/scripts/motion/html/index.html')
});
 
 app.get(/^(.+)$/, function(req, res){ 
     res.sendFile( __dirname + req.params[0]); 
 });
 
 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Escuchando en " + port);
 });

