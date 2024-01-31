import express from "express";
import mysql from "mysql2";

const router = express.Router();

// route to get all user
router.get("/all",(req,res)=>{

});


router.post("/add",(req,res)=>{
    const {userId,userName,userAge}=req.body;
    if(userId && userName && userAge){
        const mysqlConnection = mysql.createConnection({
            "user":"root",
            "password":"poudeL46@",
            "host":"localhost",
            "database":"nodeandsql"
        });

        const queryString = `INSERT INTO USERS VALUES('${userId}','${userName}', '${userAge}')`;
        mysqlConnection.query(queryString,(error,result,field)=>{
            if(error){
                res.status(400).json({
                    sucess:false,
                    message:error,
                })
            }else{
                res.status(200).json({
                    sucess:true,
                    message:"User details added"
                });
            }
        });
    }else{
        res.status(400).json({
            "sucess":false,
            "message":"All fields are required"
        });
    }
})



export default router;