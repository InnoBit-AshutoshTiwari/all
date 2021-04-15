const {Client} = require("pg")

const queryOrgModel=`CREATE TABLE Organization_Model7
(
    Id BIGSERIAL PRIMARY KEY NOT NULL,
    Name VARCHAR(100) NOT NULL,
    ShortName VARCHAR(100) NOT NULL,
    Description VARCHAR(500) DEFAULT NULL,
    GTIN VARCHAR(100) NOT NULL,
    IsActive BOOLEAN DEFAULT TRUE,
    BillingAddressId BIGINT DEFAULT NULL,
    PostalAddressId BIGINT DEFAULT NULL,
    CreatedBy BIGINT NOT NULL,
    CreatedAt TIMESTAMPTZ DEFAULT Now(),
    UpdatedBy BIGINT NOT NULL,
    UpdatedAt TIMESTAMPTZ DEFAULT Now(),
    DeletedBy BIGINT DEFAULT NULL,
    DeletedAt TIMESTAMPTZ DEFAULT NULL
)`;

const queryLocModel=`CREATE TABLE Location_Model7
(
    Id BIGSERIAL PRIMARY KEY NOT NULL,
    OrganizationId BIGINT NOT NULL,
    Name VARCHAR(100) NOT NULL,
    ShortName VARCHAR(100),
    Description VARCHAR(500) DEFAULT NULL,
    PostalAddressId BIGINT DEFAULT NULL,
    BillingAddressId BIGINT DEFAULT NULL,
    CreatedBy BIGINT NOT NULL,
    CreatedAt TIMESTAMPTZ DEFAULT Now(),
    UpdatedBy BIGINT NOT NULL,
    UpdatedAt TIMESTAMPTZ DEFAULT Now(),
    DeletedBy BIGINT DEFAULT NULL,
    DeletedAt TIMESTAMPTZ DEFAULT NULL

)`;

const queryAddModel=`CREATE TABLE Address_Model7
(
    Addressline1 VARCHAR(100) NOT NULL,
    Addressline2 VARCHAR(100) DEFAULT NULL,
    Addressline3 VARCHAR(100) DEFAULT NULL,
    Addressline4 VARCHAR(100) DEFAULT NULL,
    Landmark VARCHAR(100) DEFAULT NULL,
    Pincode VARCHAR(100) NOT NULL,
    City VARCHAR(100) NOT NULL,
    State VARCHAR(100) NOT NULL,
    Country VARCHAR(100) NOT NULL,
    CreatedBy BIGINT NOT NULL,
    CreatedAt TIMESTAMPTZ DEFAULT Now(),
    UpdatedBy BIGINT NOT NULL,
    UpdatedAt TIMESTAMPTZ DEFAULT Now(),
    DeletedBy BIGINT DEFAULT NULL,
    DeletedAt TIMESTAMPTZ DEFAULT NULL

)`;







/*
client.connect()
.then(()=>console.log("again connection stablish!"))
.then(()=>{
    //client.query(queryOrgModel);
    //client.query(queryLocModel);
    client.query(queryAddModel);
    //console.log("all 3 tables created succesfully!")
})
.finally(()=>client.end())


//*/

async function table()
{
    const {Client} = require("pg")
    const client = new Client({
        user:"postgres",
        password:"123456",
        host:"localhost",
        port:5432,
        database:`${databaseName}`
    })

    await client.connect()
    console.log("connection stablish!");
    try{
        await client.query(queryOrgModel);
        await client.query(queryLocModel);
        await client.query(queryAddModel);
        console.log("all 3 table created!")
    }catch(err){
        console.log("error generated!")
    }finally{
        await client.end()
    }
}

export default table;