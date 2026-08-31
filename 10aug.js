// Express.js : is a nodejs' framwork used to build server and gives the fast development mode : 

const express=require("express")
const fs=require("fs") 

const app=express()

app.get("/" ,(req,res)=>{
    res.send("this is express server ")

})



app.get("/about" ,(req,res)=>{
    res.send("hello about page ")
})


app.get("/user" ,(req,res)=>{
    res.json({
   name:"rohan",
   email:"rohan@gmail.com",
   password:"rohan@123",
    })
})


app.get("/check" ,(req,res)=>{
    res.send({
        massage:"hello"
    })
})


app.get("/readdata",(req,res)=>{
    const user="rohan"
    const password="rohan@123"
    // if(user==="rohan"){
    //     res.send(`hello user ${user}`)
    // }
    
    if(password){
        res.send(`welcom user in the home page ${user}`)
    }
   
})
app.listen(9000,()=>{
    console.log("your server is runnig on 9000")
})

