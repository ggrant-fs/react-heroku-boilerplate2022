const express = require('express');
const path = require('path')

const app = express();

if(process.env.NODE_ENV){
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const port =  5150;

app.listen(port, ()=>{
  `server is listing on port ${port}`
});

