const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
  const Studentinfo=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
  });
  const info=mongoose.model("User",Studentinfo);
  const user1=new info({
    name:"Mihir",
    email:"Mihigupta2@gmail.com",
    age:21,
  });
 
  const user2=new info({
    name:"Mihi1r",
    email:"Mihigupta2@gmail.com",
    age:21,
  });
  user1.save().then((res)=>{console.log(res)}).catch((err)=>{
    console.log(err)
  });
// const Documents=[{ name: "Mihir", email: "mihirkuamrgupta2@gmail.com", age: 12 },
// { name: "Mihir1", email: "mihirkuamrgupta2@gmail.com", age: 112 },
// { name: "Mihir2", email: "mihirkuamrgupta2@gmail.com", age: 122 },
// { name: "Mihir3", email: "mihirkuamrgupta2@gmail.com", age: 123 }
// ];
// info.insertMany(Documents).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});


