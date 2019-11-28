const express=require("express");
const empRouter=require("./Routes/emp");
const app=express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/emps",empRouter);

app.listen(9898,()=>{
    console.log("server started");
});
  