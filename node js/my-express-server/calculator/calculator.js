const express = require("express");
const app = express();
app.get("/",function(req,res)
{s
    res.sendFile(__dirname+"/index.html");
})
app.listen(3000,function()
{
    console.log("Server Started Running on port 4000...");
})