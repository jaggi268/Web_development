const { json } = require("express");
const express = require("express");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.get("/",function(req,res)
{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/",function(req,res)
{
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
    const data = {
        members:[{
            email_address:email,
            status : "subscribed",
            merge_fields:
            {
                FNAME:firstName,
                LNAME:lastName
            }
        }]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us5.api.mailchimp.com/3.0/lists/dc3e1b5184"
    const options = {
        method:"POST",
        auth:"jagadeesh:68b6a30ebaa2c15d94d81d7715464821-us5"
    }
    const request = https.request(url,options,function(response)
    {
        response.on("data",function(data)
        {
            console.log(JSON.parse(data));
        })
        if (response.statusCode===200) {
            res.sendFile(__dirname+"/success.html")
        }
        else{
            res.sendFile(__dirname+"/failure.html")
        }
    })
    request.write(jsonData);
    request.end();
})
app.post("/failure",function(req,res)
{
    res.sendFile(__dirname+"/signup.html")
})
app.listen(process.env.PORT || 3000,function()
{
    console.log("server is running on port 3000...");
})
