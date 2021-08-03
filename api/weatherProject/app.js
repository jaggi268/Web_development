const { response } = require("express");
const express = require("express");
const { write } = require("fs");
const https = require("https");
const app = express();

app.get("/",function (req,res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=ongole&appid=e8c843ea3b3daa85462cbecaff3d86ff&units=metric";
    https.get(url,function(response) {
        console.log(response.statusCode);
        response.on("data",function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imageURl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(temp);
            // stringify
            const description = weatherData.weather[0].description;
            console.log(description);
            console.log(weatherData.name);
            res.write("<h1>The temperature in "+weatherData.name+" is "+ temp+" degree Celsius.</h1>");
            res.write("<p>The weather is currently "+description+"</p>");
            res.write("<img src="+imageURl+">");
            res.send();
        })
    })
})












app.listen(3000,function (req,res) {
    console.log("Server is running on port 3000...");
})