const { request, response } = require("express");
const express = require("express");
const app = express();
app.get("/",function(req,res)
{
    res.send("<h1>Hello how are you?</h1>");
});
app.get("/contact",function(req,res)
{
    res.send("Conatct Me @ <a>jagadeeshthottempudi@gmail.com</a>");
});
app.get("/about",function(req,res)
{
    res.send("<h1>You've Reached to Jagadeesh Thottempudi</h1>")
})
app.get("/hobbies",function(req,res)
{
    res.send("<ul><li>Jogging</li><li>Tea</li><li>Running</li></ul>")
})
app.listen(3000,function()
{
    console.log("Server Started on port 3000");
});