const mongoose = require("mongoose");

const URI= 'mongodb+srv://Products:Pass12345@cluster0.m81duvk.mongodb.net/USERREGISTRATIONAPPLICATION?retryWrites=true&w=majority';

mongoose.connect(URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(()=>{
    console.log(`connection Succesful`)
}).catch((error)=>{
    console.log(`no connection`,error);
})
   
    
