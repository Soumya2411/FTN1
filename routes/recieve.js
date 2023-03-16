const express = require('express');
const { dirname } = require('path');
const app = express();
const router = express.Router();

router.get('/recieve',(req,res)=>{
    res.sendFile()
})