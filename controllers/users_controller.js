const todo=require('../models/todo');

module.exports.create=async function(req,res){
    try{ let Todo=await todo.create(req.query);
        return res.redirect('back');
      }catch(err){console.log('Error', err);return;}
}

module.exports.delete= async function(req,res){
    try{for(let j=0;j<req.query.check.length;j++)
       {  const id=check[j]._id;
        await todo.deleteOne({id}); 
       }
     } catch(err){ console.log('Error', err); return;}

   return res.redirect('back');
}
