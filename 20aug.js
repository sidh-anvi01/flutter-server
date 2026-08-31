// const express=require("express")


// password:abc@1234

// bcrypt : 
// hash :ldkdhfiulcwkeho3gvxqpk[30r74t53ioy8udbqwui2g4]
// salt:
//  1234
// 4321
// 2134
// 3124
// 34312


// how to use :

// npm install bcrypt 

// hash :
// compare : 


const express=require("express")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
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

          return res.json({
            message:"user logged in succcessfull "
          })

    }
catch(err){

    console.log(err)
    return res.json({message:"server error "})

}


})



app.listen(9000)