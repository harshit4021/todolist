const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var items=[];
var workitems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
  var today =new Date();
  var options ={
    weekday:"long",
    day:"numeric",
    month:"long"
  }
  var day=today.toLocaleString("en-US",options);
  res.render("list", {listTitle: day, newli:items});
});
app.post("/",function(req,res){
  let ni =req.body.newitem;
  if(req.body.list==="work"){
   workitems.push(ni);
   res.redirect("/work");
  }
  else{
  items.push(ni);
  res.redirect("/");
  }

});

app.get("/work",function(req,res){
res.render("list",{listTitle:"work list",newli:workitems})
})
app.get("/about",function(req,res){
  res.render("about");
})
app.listen(3000,function(){
  console.log("server started on port 3000")
});
