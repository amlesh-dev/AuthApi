import express from "express";

const app = express();
const port = 3000;

app.get("/api/auth",(req, res) => {
    res.json({message: "Hello i am amlesh"});
})

app.listen(port,()=>{
    console.log("Hi");
})