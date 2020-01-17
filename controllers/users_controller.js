const todo=require('../models/todo');

module.exports.create=async function(req,res){
    try{ 
        let Todo=await todo.create(req.query);
                 return res.redirect('back');
      }
    catch(err){
        console.log('Error', err);
        return;
    }
}

module.exports.delete= async function(req,res){
  try{
       const checksid=req.query.check;
      for(let i=0;i<checksid.length;i++)
       {  
         const id=checksid[i];
         await todo.deleteOne({_id:id}); 
       }
     } 
   catch(err){ 
       console.log('Error', err); 
       return;
   }

   return res.redirect('back');
}
