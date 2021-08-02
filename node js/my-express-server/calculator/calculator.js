const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res)
{
    console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The sum of given two numbers is "+result);
});
app.get("/bmicalculator",function(req,res)
{
    res.sendFile(__dirname+"/bmiCalculator.html")

});
app.post("/bmicalculator",function (req,res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = Number(weight/(height*height));
    res.send("Your BMI is "+bmi.toFixed(2));
})
app.listen(3000,function()
{
    console.log("Server Started Running on port 3000...");
})