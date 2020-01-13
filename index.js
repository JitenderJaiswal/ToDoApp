const express=require('express');const app=express();
const port=8000;    
var bodyParser = require('body-parser');      

const db=require('./config/mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
     
app.use(express.static('./assets'));
app.set('layout extractStyles',true);//extract style and scripts from sub pages into the layout
app.set('layout extractScripts',true);

app.use('/',require('./routes'));
app.set('view engine','ejs');app.set('views','./views');

app.listen(port,function(err){
    if(err)console.log(`Error in running the server:${err}`);
    console.log(`Server is running on port:${port}`);
});