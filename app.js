const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const db= require('./db/conn.js')
const route=require('./routes')
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
  });

  const User = mongoose.model('User', userSchema);

  app.get('/signup', (req, res) => {
   
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  

  
  app.post('/signup', (req, res) => {
    const { email, password } = req.body;
  
    const user = new User({ email, password });
    user.save()
      .then(() => {
        console.log('User saved to database');
        res.send('User saved to database');
      })
      .catch(err => {
        console.error('Error saving user to database', err);
        res.status(500).send('Error saving user to database');
      });
  });
  
  
    
    
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });