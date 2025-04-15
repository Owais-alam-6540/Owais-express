let exp = require("express");
let r = require("./Routing/route");
let db=require("./db_connect")
let user = require("./Collection/User");
require("dotenv").config();

let myapp = exp();

myapp.use("/owais",r)

let datajao = async function(){
    try {
        user.create({
            user_name:"owais",
            email:"owais@gmail.com",
            password:"123456",
            age:2
        })
        console.log("data added")
    } catch (error) {
        console.log(error)
    }
}


db().then(()=>{
    datajao();
    myapp.listen(process.env.PORT_NO,()=>{
        console.log(`Server Is Running On http://localhost:${process.env.PORT_NO}/owais`)
    })  
}).catch((e)=>{
    console.log(e)
})

