const express= require("express");
const path=require("path")

const app=express();

//path of the index.html file
index_path=path.join(__dirname,"../public/index.html")
console.log(index_path)
app.use(express.static(index_path))


//app.get(route,callback function)
app.get('/',(req,res)=>{
    res.send("this  is home page !");
});

app.get("/about",(req,res)=>
{
    res.send("this is the about page!");
})


app.get("/weather",(req,res)=>
{
    res.send("this si the wether page")
})
app.get("*",(req,res)=>
{
    res.send("Opps")
})

app.listen(8080,()=>{
    console.log("the server starts at 8000 port no.")
});
