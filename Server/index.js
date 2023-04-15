

const express = require("express");
const app = express();
const port= process.env.PORT || 3001;
const cors = require('cors')

app.use(express.json());
app.use(cors());
const User = require('./Model/Scema');
app.use(require('./routes/route'));
require("./database/db")


app.use(express.json());
// app.get("/data",(req,res)=>{
//     res.send("Hello from node")
// });

app.listen(port, ()=>{
  console.log(`server is running at ${port}`);
})