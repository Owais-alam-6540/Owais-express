let mongo =require("mongoose");
require("dotenv").config();
let atlas_url=process.env.URL;
let db_connects=async function(){
    mongo.connect(atlas_url).then(()=>{
        console.log("connected to database");
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports =db_connects