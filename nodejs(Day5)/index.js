const { faker } = require('@faker-js/faker');
const mysql=require('mysql2'); 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password:'Ma9674187207@'
});
let Sqlcommand="Show Tables";
connection.query(Sqlcommand,(err,result)=>{
    try{
        if(err) throw err;
        console.log(result)
    }
    catch(err){
        console.log(err);
    }
})
connection.end();
let getRandomUser=()=> {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
     
     
    };
  }
  console.log(getRandomUser());