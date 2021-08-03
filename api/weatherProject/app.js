const {
    response
} = require("express");
const express = require("express");
const {
    write
} = require("fs");
const https = require("https");
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
})
app.post("/", function (req, res) {
    const cityName = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e8c843ea3b3daa85462cbecaff3d86ff&units=metric";
    https.get(url, function (response) {
        res.sendFile(__dirname + "/index.html");
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imageURl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            // stringify
            const description = weatherData.weather[0].description;
            res.write("<h1>The temperature in " + cityName+ " is " + temp + " degree Celsius.</h1>");
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<img src=" + imageURl + ">");
            res.send();
        })
    })
    

})










app.listen(3000, function (req, res) {
    console.log("Server is running on port 3000...");
})