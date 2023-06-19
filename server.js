const express = require('express');
const path = require('path')

const app = express();

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
  })
}

const PORT =  process.env.PORT || 3000;

app.listen(PORT, ()=>{
  `server is listing on port ${PORT}`
});

