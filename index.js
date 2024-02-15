const express = require('express');
const cors = require('cors');
const app=express();
const port=process.env.PORT || 5000;

// middlewire
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hotel Management is running.........');
})
app.listen(port,()=>{
    console.log(`Hotel Mangemet is running on port ${port}`);
})