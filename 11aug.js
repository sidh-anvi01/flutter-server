// is a function  that runs befor the request reches the routes handlers :

// Client Request :
// |
// Middelware:
// | 
// Routes :
// |
// Response 

// function middelware(req,res,next){
//     console.log("Middellware called")
//     next()
// }

// req,: 
// next : pass  control to next middelware routes :

//  simple middelware :

// how to run middelware : app.use()



const express =require("express")
const app=express()

// function checkMiddelware(req,res,next){
//     console.log("middelware excuted")
//     next()
// }

// app.use(checkMiddelware)

// app.get("/" ,(req,res)=>{
//     res.send("this is just simple middelware")
// })
// app.get("/about" ,(req,res)=>{
//     res.send("this is about ")
// })

// app.listen(9000,()=>{
//     console.log("server runnig ")
// })



// Route level middelware: 
// only for a specific route only :


// function logginMiddelware(req,res,next){
//     console.log("this is login middelware")
//     next()
// }

// app.get("/login",logginMiddelware ,(req,res)=>{
//     res.send("this is login page ")
// })






// 3. Authentication middelware:

// function auth(req,res,next){
//     const isLogin=false
//     if(isLogin){
//         next()
//         console.log("login valid ")
//     }else{
//         res.send("unauthorized person")
//     }
// }


// app.get("/dashboard",auth ,(req,res)=>{
//     res.send("welcome dahsboard")
// })



// 4. Built-in Middelware :
// Express provieds some built-in middelware that used on specific taks :

// app.use(express.json())
// converts JSON request body into js object :

// url Encoded Middelware :
// app.use(express.urlencoded({extended:true}))
// used for html form data :


// static middelware: 
// app.use(express.static("public"))
// to serve: 
// html 
// CSS
// js
// assets: 
// for the public folder 



// 5. multiple middelware:

// function logginMiddelware(req,res,next){
//     console.log("this is login middelware")
//     next()
// }
// function check(req,res,next){
//     console.log("this is login middelware")
//     next()
// }

// app.get("/login",logginMiddelware,check ,(req,res)=>{
//     res.send("this is login page ")
// })


// app.listen(9000)




// Authentication :
// AuthorIzation:
// Logging:
// validation:
// file upload :
// Error handling: 