var express = require('express');
var app = express();
var fs=require('fs');
var bodyParser=require('body-parser');
var jsonbody='';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/getdata/",'utf-8',function(req, res){
   fs.readFile("./data.json",function(err,data){
      res.json({'data':'srini'});
   });
   
});
app.post("/", function (req, res) {
   console.log(req.body);
   jsonbody=req.body
   fs.writeFiles("./data.json",'https://graph.facebook.com/v2.6/me/messages',"utf-8",function(err){
      if(err){
         console.log('error');
      }
   });
    if (req.body.result.action == "input.welcome") {
        if (req.body.result.resolvedQuery == "hi") {
            return res.json({
                speech: req.body,
                displayText: req.body,
                source: 'agent'
            });
        }
    }
});







app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})
