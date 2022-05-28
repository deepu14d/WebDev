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

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res){
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    height = Math.pow(height, 2);
    var bmi = (weight/height)*10000;
    res.send("Your BMI is: " + bmi);
})

app.listen(3000, function(){
    console.log("Server is live on port 3000");
});
