const mongoose = require('mongoose');
const mongoURI='mongodb://mernapprupam:RUPAM1234@ac-oevsnhd-shard-00-00.namkz1a.mongodb.net:27017,ac-oevsnhd-shard-00-01.namkz1a.mongodb.net:27017,ac-oevsnhd-shard-00-02.namkz1a.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-v0djmx-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async()=>{
  await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
    if(err)  console.log("---",err)
    else{
    console.log("connected");
    const fetched_data= mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray( async function(err,data){
const foodCategory = await mongoose.connection.db.collection("food_category");
foodCategory.find({}).toArray(function(err,catData){
    if(err) console.log(err);

       else{
        global.food_items = data;
        global.food_category = catData;
        
        
       
      } 

})
      


      // if(err) console.log(err);

      // else{
      //   global.food_items = data;
      //   //console.log( global.food_items)
        
       
      // } 
    })
    }
  });
}
module.exports=mongoDB();

  