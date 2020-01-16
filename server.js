console.log('***SERVER***');

const express = require("express");
const app = express();
const path =  require("path");


app.use(express.static( __dirname + '/public/dist/public' ));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.json());

//NOTE Eroors and Session
const flash = require('express-flash');
const session = require('express-session');
app.use(flash());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))


// require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, () => console.log("listening on port 8000"));