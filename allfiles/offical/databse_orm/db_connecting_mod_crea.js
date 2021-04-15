const {Sequelize,DataTypes,Model} = require("sequelize");

const sequelize = new Sequelize("rew3","postgres","123456",{host:"localhost",dialect:'postgres'});




sequelize.authenticate().then(()=>console.log("connection stablish!")).catch(()=>console.log("error occured!"));


//fun()
/*
async function rt()
{
const User=await sequlize.define('User',{
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName:{type:Sequelize.STRING,
        allowNull:false
    }},
    {
        tableName:"employee"
    }
)}
rt()*/

//User()
// console.log(sequlize.models)

//sequlize.close();



class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});


class newusers extends Model {}

newusers.init({
  // Model attributes are defined here
  /*id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey:true
  },*/
  firstname: {
    type: DataTypes.CHAR
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'newusers', // We need to choose the model name
  freezeTableName: true,
  timestamps:false
});


//User.sync({ force: true }).then(()=>console.log("The table for the User model was just (re)created!"))
//.catch((err)=>console.log("not created"+err));



//class address_model7 extends Model{}
// the defined model is the class itself
console.log(User === sequelize.models.User); 
console.log(sequelize.models)// true
console.log(newusers.findAll().then(value=>console.log(value)).catch((err)=>console.log(err)));
