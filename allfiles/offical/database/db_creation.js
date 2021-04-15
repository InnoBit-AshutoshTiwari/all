const {Client} = require("pg");

const client = new Client({
    user:"postgres",
    password:"123456",
    host:"localhost",
    port:5432,
    //database:"database name"
})

/*client.connect()
.then(()=>{console.log("Connected succesfully")})
.then(()=>{
    try{ client.query("create database firstdb");}
    catch(err){
        //console.log(err);
        console.log("in  the catch block");
    } 
})
//.then(()=>client.query("")).then((result)=>console.table(result.rows))
.then(()=>client.query("CREATE TABLE first_table(id NUMERIC PRIMARY KEY,Name VARCHAR(100),Address VARCHAR(100),Course Char(10))"))
.catch((err)=>console.log(err))
.finally(()=>client.end());*/

async function createDb()
{
    await client.connect();
    console.log("connected succesfully")
    try{
    await client.query("CREATE DATABASE Orgnization")}
    catch(err){
        console.log(err)
    }

}


/*async function execute()
{
    await client.connect();
    console.log("connected succesfully")
    //const result=await client.query("SELECT datname From pg_database WHERE datistemplate = false;");
    const result=await client.query("\list+;");
    console.table(result);
    await client.end();
    console.log("client isconnect succesfully!")
}

execute()*/
