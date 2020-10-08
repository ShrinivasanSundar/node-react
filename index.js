var express = require("express");
var app=express();
//To get json payload from request
app.use(express.json());
//For forms 
app.use(express.urlencoded({extended:false}));

//To import router
var router= require("./route/index");

//To start database on startup
var database = require("./database/config")



app.use((req,res,next)=>{
 
    res.header("Access-Control-Allow-Origin", "*");
    next();
}
    );
    
//To have a standard endpoint ie:/api and mounted the imported router
app.use("/api",router)

//To send status 404 for wrong url calls
app.use((req,res)=>{
    res.status(404).send({
        "message":"Requested URL not present"
    })

})
// To Start server and to listen in port 2600
app.listen(process.env.PORT||2600,()=>{
    console.log("Server is started in port 2600")
});
