var mongo=require("mongoose");
//To connect to local host server
mongo.connect('mongodb://localhost/article', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(res=>{
    console.log("Database connected successfully");
}).catch(err=>{
    console.log(err);
});

