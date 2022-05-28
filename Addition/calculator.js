const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var result = Number(num1) + Number(num2);
    res.send("Addition the numbers give: " + result);
});

app.listen(3000, function(){
    console.log("Server is live on port 3000");
});
