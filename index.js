import express from "express";

import user from "./routes/user.routes.js";

const app = express();

// middleware
app.use(express.json());


app.use("/user",user);

// default route
app.get("/",(req,res)=>{
    res.status(200).send("Hello from server");
})


app.listen(3000,()=>{
});
