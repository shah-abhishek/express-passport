const express = require('express');
const app =  express();
const port = 8001;
const bcrypt = require('bcrypt');
let users = [];

app.use(express.urlencoded({ extended: false} ));

/**@description: for server side rendering import ejs */

app.set('view-engine', 'ejs');

/**@description: Index Route listener */

app.get('/', (req, res) => {
    // res.send('Node Server Iss Running !!');
    res.render('index.ejs', { name: 'abhishek'});
});

/**@description: Login Router listener */

app.get('/login', (req, res) => {
    res.render('login.ejs');
})

/**@description: register Router listener */

app.get('/register', (req, res) => {
    res.render('register.ejs')
});

app.post("/register", async (req, res)=> {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login');
    } catch {
        res.redirect('/register');
    }
    console.log(users);
})


/**@description: listening server */

app.listen(port, () => {
    console.log(`server is running on port no ${port}`);
})