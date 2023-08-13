 let texts=["cook food","eat food","serve food"];
const express = require('express');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
const ejs=require('ejs');
// const ejslint=require('ejs-lint');
app.set('view engine','ejs');
app.get("/",(req,res)=>{
 
  
       let date=new Date();
       let currentday=date.getDay();
      let day="";
      if(currentday===0){
        day="Sunday";
      }
      else if(currentday===1){
        day="Monday"
      }
      else if(currentday===2){
        day="Tuesday"
      }
      else if(currentday===3){
        day="Wednesday"
      }
      else if(currentday===4){
        day="Thursday"
      }
      else if(currentday===5){
        day="Friday"
      }
      else if(currentday===6){
        day="Saturday"
      }

    res.render("list",{today:day,newtextitems:texts})
})
app.post("/",(req,res)=>{
    let text=req.body.txt;
    texts.push(text);
    res.redirect("/");
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

