const todo = require('../models/todo');

module.exports.home = async function(req, res){
    try{
        let Todo=await todo.find({});
                 return res.render('home',{ title :"ToDo",
                                           Todo:Todo}
                                  );
       }
    catch(err){
        console.log('Error', err);
        return;
    }
}
