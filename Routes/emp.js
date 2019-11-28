const express=require("express");
const db=require("../db");
const util=require("../utils");
const bodyparser=require("body-parser");

const router=express();
router.use(bodyparser.json());

router.get("/",(req,res)=>{
    const connection=db.connect();
    const queryText="select * from employee";
    connection.query(queryText,(err,data)=>{
        connection.end();
        const result=util.createResult(err,data);
        res.send(result);    
    });
});

router.get("/:Id",(req,res)=>{
    const connection=db.connect();
    const queryText=`select * from employee where Id=${req.params.Id}`;
    connection.query(queryText,(err,data)=>{
        connection.end();
        const result=util.createResult(err,data);
        res.send(result); 
    });
});

router.post("/",(req,res)=>{
    const connection=db.connect();
    const {Name,Age}=req.body;
    const queryText=`insert into employee(Name,Age) values('${Name}',${Age})`;
    connection.query(queryText,(err,data)=>{
        connection.end();
        const result=util.createResult(err,data);
        res.send(result); 
    });
});

router.put("/:Id",(req,res)=>{
    const connection=db.connect();
    const Id=req.params.Id;
    const {Name,Age}=req.body;
    const queryText=`update employee set Name='${Name}',Age='${Age}' where Id=${Id}`;
    connection.query(queryText,(err,data)=>{
        connection.end();
        const result=util.createResult(err,data);
        res.send(result); 
    });
});

router.delete("/:Id",(req,res)=>{
    const connection=db.connect();
    const Id=req.params.Id;
    const queryText=`delete from employee where Id=${Id}`;
    connection.query(queryText,(err,data)=>{
        connection.end();
        const result=util.createResult(err,data);
        res.send(result); 
    });
});

module.exports=router;