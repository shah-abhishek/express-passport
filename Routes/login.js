const express = require('express');
const loginApp = express();
const login = express.Router();

loginApp.set('view-engine', 'ejs')

login.get('/', (req, res) => {
    res.render('login.ejs');
})

module.exports = login;