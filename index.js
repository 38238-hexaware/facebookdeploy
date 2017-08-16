var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/", function (req, res) {
   console.log(req.body.object);
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
