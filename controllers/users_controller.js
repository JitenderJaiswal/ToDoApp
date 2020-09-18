const todo=require('../models/todo');

module.exports.create=async function(req,res){
    try{ 
        const {desc,selects,date}=req.query;

        if(!desc||!selects||!date){
          req.flash('error','Please select all the fields!!!');
          return res.redirect('back');
        }

        await todo.create(req.query);
        req.flash('success','Task added successfully!!!');
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
      for(let i=0;i<checksid.length;i++){  
         const id=checksid[i];
          await todo.deleteOne({_id:id}); 
       }
      }
      else{
        await todo.deleteOne({_id:checksid}); 
      }
      req.flash('success','Task deleted successfully!!!');
      return res.redirect('back');
     } 
   catch(err){ 
       console.log('Error', err); 
       return;
   }
}
