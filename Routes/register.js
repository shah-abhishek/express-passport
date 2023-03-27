const express = require('express');
const registerApp = express();
const register = express.Router();  

registerApp.set('view-engine', 'ejs');

register.get('/', (req, res) => {
    res.render('register.ejs')
});

register.post('/', (req, res)=> {
    res.send("this is working");
})

module.exports = register;