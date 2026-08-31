// const express=require("express")
// const mongoose=require("mongoose")
// const app=express()

// app.use(express.json())
// // connection with database : 
// mongoose.connect("mongodb://127.0.0.1:27017/newAug")
// .then(()=>console.log("database connected "))
// .catch((err)=>console.log(err))



// // schema : 

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     phone:Number
// })


// // model :

// const user=mongoose.model("user" ,userSchema)


// // how to create :

// app.post("/create" ,async(req,res)=>{
//    const userList=new user(req.body)
//  const result=await userList.save()

//  res.send(result)
//  console.log(result)

// })


// app.get("/findUser",async(req,res)=>{
//     const users=await user.find()
//     res.send(users)
// })


// app.delete("/deleteUser/:id",async(req,res)=>{
//     const deleteUser=await user.findOneAndDelete(
//         req.params.id
//     )
//     res.send(deleteUser)
// })

// app.listen(9000)









const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt =require("jsonwebtoken")
const app=express()

app.use(express.json())
// connection with database : 
mongoose.connect("mongodb://127.0.0.1:27017/newAug")
.then(()=>console.log("database connected "))
.catch((err)=>console.log(err))



const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number
})


// model :

const User=mongoose.model("newUser" ,userSchema)

// how to create :

app.post("/register" ,async(req,res)=>{

     const {name,email,password}=req.body
     let exitingUser=await User.findOne({email})

     if(exitingUser){
        return res.json("email alkready existe")
     }

     const hashedPassword=await bcrypt.hash(password,10)

     let data=new User({
        name,email,password:hashedPassword
     })
     let result=await data.save()
     res.send({
        success:true ,
        "message":"user registered ",
        result
     })
console.log(result) 

 
})


app.post("/login",async(req,res)=>{
    const {email,password}=req.body

    try{
        const user =await User.findOne({email})
        if(!user){
            return res.json({
                message:"user dosenot exist"
            })
        }


        //  check the password:
         const confirmPass=await bcrypt.compare(password,user.password)

          if(!confirmPass){
            return res.json({
                message:"password does not matched "
            })
          }


          const token =jwt.sign({id:user._id},"abc123" ,{expiresIn:'1h'})


          return res.json({
            token:token,
            message:"user logged in succcessfull "
          })

    }
catch(err){

    console.log(err)
    return res.json({message:"server error "})

}


})



app.listen(8000)




// token : jwt (json web token ) : 
 
//  payload : user information :
//  secrete key : unique id :
//  expiry time : 

//  how to generate: 

//   we have to install the package for jwt:

//   npm i jsonwebtoken 


// web : localhost 
// application :--
// vertiual :10.0.0.1:
// physical :device's ip : 192.168.39.34
// 10.251.45.202 


// http://10.251.45.202:8000/login


// how to deploy : 
// render : 