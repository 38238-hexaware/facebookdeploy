var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var fs=require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", function (req, res) {
fs.writeFile("./data.json",JSON.stringify(req.body),function(err){
});
if (req.body.object === 'page') {
    if (req.body.result.action == "input.welcome") {
        if (req.body.result.resolvedQuery == "hi") {
            return res.json({
                speech: req.body.object,
                displayText: req.body.object,
                source: 'agent'
            });
        }
    }
    }
});

app.get("/getdata/",function(req, res){
   fs.readFile("./data.json",'utf-8',function(err,data){
      res.json(data);
   });
   
});
app.listen(process.env.PORT || 3000, function (message) {
    console.log("Server is running on the port...");
})
