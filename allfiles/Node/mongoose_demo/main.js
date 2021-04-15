const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/students",{useNewUrlParser: true,useUnifiedTopology: true ,'useCreateIndex': true}).then(()=>{console.log("Connection stablish");}).catch((err)=>{console.log(err);})

//schema and model in mangoose and creation
//schema
//Mongoose schema defines the structure of the document ,default values,validations,etc

const playlist=new mongoose.Schema(
    {
    name:{type:String,
        require:[true,"User Phone no required"],
        unique:true,
        trim:true,
        minlenght:[2,"minimum 2letters"],
        maxlength:30
    },
    age:{type:Number,
        validate(value){if(value<=0){throw new Error("age can't be negative!");}},//custom validation
    },
    phoneNo:{
        type:Number,
        // validate:function(v){
        //     return /\d{3}-d{3}-d{4}/.test(v);
        // },
        validate(value){if(value.maxlenght>10){throw new Error("Phone no can't be more then 10 digits.");}},
        required:[true,'User phone number required!']
    },
    address:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});



//Model creation or collection creation
const Class10=new mongoose.model("Class10",playlist);



//insertion or creation of the document
const createDocument=async()=>
{
    try
    {
        const newstudent=new Class10({
            name:"abcdefg",
            age:3,
            phoneNo:94589455676788,
            address:"yuyaffrrgfrfr d"
        });
        const result=await newstudent.save(newstudent);
        console.log("---------------------------");
        console.log(result);
        console.log("New student Registered");
        console.log("---------------------------");
    }catch(err){
        console.log(err);
    }
}




//Performing the CRUD(Create,Read,Update,Delete) operation on the database
//Read operation
const getDocument=(newname)=>
{
    const result=Class10.find({name:newname});
    console.log("Details of the students is:");
    console.log("----------------------------------------");
   
    var count=result.length;
    var temp=0
    
   
    if(count==temp)
    {
       return true
    } else {
        return false
    }


}


const updateDocument=async()=>{
    const result=await Class10.updateOne({name:"Prashant"},{$set:{address:"Delhi",age:898}});
    console.log(result);
}

const deleteDocument=async()=>{
    const result=await Class10.remove({name:"ramesh"});
    console.log(result);
}

//createDocument();
//deleteDocument();
//updateDocument();
var m=getDocument("abcdefg");
console.log(m);
