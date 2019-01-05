var Express = require("express");
var app = Express();

app.get("/",(req,res)=>{
res.status(200).send("hello");
})
app.get("/test",(req,res)=>{
    res.status(500).send({"message":"error"});
    })
var server = app.listen(3000,()=>{
    console.log("Listing on Port" + server.address().port + "...")
})

module.exports = server;