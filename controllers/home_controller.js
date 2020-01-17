const todo = require('../models/todo');

module.exports.home = async function(req, res){
    try{
        let Todo=await todo.find({});
                 return res.render('home',{ title :"contactList",
                                           Todo:Todo}
                                  );
       }
    catch(err){
        console.log('Error', err);
        return;
    }
}
