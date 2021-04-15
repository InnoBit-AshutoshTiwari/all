const express = require("express")
const fetch =require('node-fetch')
const  redis =require('redis')

const port = 3000;
const port_redis=process.env.PORT || 6379;
const client =redis.createClient(port_redis);
const  app =express()

function fun(username)
{
    console.log("data fetched")
    return fetch(`https://api.github.com/users/${username}`)
}


async function getRepos(req,res,next)
{
    try{


        const { username } =req.params;

        const response =await  fun(username)
        const data = await response.json();

        

        console.log(data.public_repos)

        const repos=data.public_repos;


        // set data to redis

        client.setex(username,73000,repos,()=>{console.log("data stored into cluster")});

        res.send(`<h1>${username} has ${repos} repos!!</h1>`)
 
    }
    
    catch(err){
        console.log(err)

        res.status(500);
    }
}
 

app.get("/repos/:username",getRepos)







app.listen(port,()=>{console.log("app run on port no "+port)})