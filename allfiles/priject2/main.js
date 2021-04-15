const express =require('express');


require("./db/db_connection")

const app=express();
const port=8000;

const Student=require("./db/db_schema");
const auth=require("./db/auth");



//const test=auth("Ashutos@gmail.com").then((value)=>{return value})
const authen=async(data)=>
{
    return await auth(data);
}
authen('ashu@getMaxListeners.com');



app.use(express.json());


app.get("/",(req,res)=>
{
    res.send("This is the home page!");
});


app.post("/register",async(req,res)=>{
    /*try{

         
        const pass1=req.body.pswd1;
        const pass2=req.body.pswd2;
        const email=req.body.email;
        console.log(email)
        console.log("you are in the post method")

        const pre_register=await authen(first);
        console.log(pre_register)
        console.log(result)

        if(result==true)
        {
            console.log("you are in pre_register")

            if(pass1===pass2 )
            {

                console.log("both password are same")

                const registerEmployee=new Register(
                    {
                        username:req.body.uname,
                        email:req.body.email,
                        orgination:req.body.org,
                        password:req.body.pswd1
                    });

                const registered=await registerEmployee.save(registerEmployee);
                //res.status(201).render("index");
                res.send("You are  successfull registerd!")
            }
            else{
                console.log("Password are not same!")
                alert("password are not same")
                res.render("regis")}
        }else{
            res.send("email allready exist please enter the new email!"); }

    }catch(err){
        res.status(400).send(err)}*/
});


app.listen(port,()=>
{
    console.log(`Server start at port no ${port}`);
})
