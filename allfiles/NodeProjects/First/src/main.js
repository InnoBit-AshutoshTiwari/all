const express= require("express");
const path=require("path")
const hbs=require("hbs");

const app=express();

//path of the index.html file
index_path=path.join(__dirname,"../public")
console.log(index_path)
template_path=path.join(__dirname,"../templates/views")
partials_path=path.join(__dirname,"../templates/partials")
//app.use(express.static(index_path))


app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path)

//app.get(route,callback function)
app.get('/',(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>
{
    res.render("about");
})

app.get("/weather",(req,res)=>
{
    res.render("weather")
})
app.get("*",(req,res)=>
{
    res.send("Opps")
})

app.listen(8000,()=>{
    console.log("the server starts at 8000 port no.")
});

