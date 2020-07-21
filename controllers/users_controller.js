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
      
      if(Array.isArray(checksid)){
      for(let i=1;i<checksid.length;i++){  
         const id=checksid[i];
         console.log(id);
          await todo.deleteOne({_id:id}); 
       }
      }
      else{
        await todo.deleteOne({_id:checksid}); 
      }
     } 
   catch(err){ 
       console.log('Error', err); 
       return;
   }

   return res.redirect('back');
}
