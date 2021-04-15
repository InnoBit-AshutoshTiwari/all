const mongoose=require("mongoose");
const validator=require("validator")

const schema_obj={
    user_name:{
        type:String
    },
    email:{type:String},
    orgination:{type:String},
    Password:{type:String}

    /*roll_number:{
        type:Number,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true,
        trim:true,
    },
    email:
    {
        type:String,
        unique:true,  
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        },
    },
    gender:{
        type:String,
        require:true
    },
    dob:{
        type:Date,
        
        trim:true,
    },
    country:
    {
        type:String,
    },
    course:
    {
        type:String
    },
    address:{
        type:String
    }*/
}
const studentSchema=new mongoose.Schema(schema_obj);

const Student=new mongoose.model("Student_Registration",studentSchema);

module.exports=Student;



