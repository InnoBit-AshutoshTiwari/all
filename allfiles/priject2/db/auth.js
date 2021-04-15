const Student = require("./db_schema")

const auth=async (newemail)=>{
    const result=await Student.findOne({'email':newemail},{email:1});
    console.log(result);

    if(!result)
    {
        return true;
    }
    else{
        return false;
    }
}

module.exports=auth;