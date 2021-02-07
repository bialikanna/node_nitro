// const http = require("http");

// const handler = (request, response) => {
//     response.end("<h1>Hejka</h1>")
//     console.log("Ktoś wszedł na strone")
// }
// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, (err) => {
//     if (err) { return console.log(err)}
//     console.log(`serwer działa na porcie: ${port}`)
// })

const functions = require("./function")
const express = require("express");
const path = require("path");
const port = 3000;

const app = express();
app.set("view engine", "hbs")
app.use('/assets',express.static(path.join(__dirname,"./assets")));
app.use('/js',express.static(path.join(__dirname,"./js")));

app.get("/", function (req,res){
    res.render("index",{
        title: "Super zajecia",
        subTitle: functions.subTitle
    });
})

app.get("/about", function (req,res){
    res.send("O nas");
})

app.listen(port, (err)=>{
    if (err) { return console.log(err)}
    console.log(`Apka dziala na porcie ${port}`)
})