const {Client} = require("pg")
const table=require("./table")

const databaseName="New11"
async function createDb()
{
    
    
    const firstClient = new Client({
        user:"postgres",
        password:"123456",
        host:"localhost",
        port:5432,
        //database:"database name"
    })

    await firstClient.connect();
    console.log("connected succesfully")
    try{
    const y=await firstClient.query(`CREATE DATABASE ${databaseName}`)
    console.log("y="+y)
    console.log(`database of name ${databaseName} created succesfully!`)
    //then(()=>console.log(`database of name ${databaseName} created succesfully!`))
    }
    catch(err){
        //console.log(`Database of name ${databaseName} allready exist`);
        console.log(err)
    }
    finally{
        await firstClient.end();
     
        await table();
    }
}



//______________________________________________________________________








createDb();

