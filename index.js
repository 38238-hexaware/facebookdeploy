var express = require('express');
var app = express();
var bodyParser=require('body-parser');
var fs=require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", function (req, res) {
fs.writeFileSync("./data.json",req.body.originalRequest.data.sender.id,'utf8');
var sender_id=req.body.originalRequest.data.sender.id;
var rec_id=req.body.originalRequest.data.recipient.id;
if (req.body.object === 'page') {
    if (req.body.result.action == "input.welcome") {
        if (req.body.result.resolvedQuery == "hi") {
            return res.json({
                speech: sender_id,
                displayText: sender_id,
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
