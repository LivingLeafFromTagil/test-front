const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get("port") || 5000;
const app = express();

app.use('api/list', require('../routes/list.route'));

async function starting(){
  try{
    await mongoose.connect(config.get("dbUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, ()=>{
      console.log(`STARTED on port ${PORT}...`)
    })
  } 
  catch(e){
    console.log("servError", e.message);
    process.exit(1);
  }
}

starting();

