const express= require('express');
const app = express();

const path =require('path');
const mongoose =require('mongoose');
const passport =require('passport');
const flash =require('connect-flash');
const morgan =require('morgan');
const cookieparser =require('cookie-parser');
const bodyparser =require('body-parser');
const session =require('express-session');

const url= require('./app/settings/database');

mongoose.connect(url,{
    useMongoClient:true
});

//configuracion 
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(morgan('dev'));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended: false}));


app.listen(app.get('port'),() =>{
    console.log('server on port', app.get('port'));
});