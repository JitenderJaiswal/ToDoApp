//SETTING USER SCHEMA
const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    desc:   {type:String,
             required:true,
            },
    date:   {type:String,
             reuired:true
            },
 selects:   {type:String,
             required:true
            }
});

const Todo=mongoose.model('Todo',userSchema);
module.exports=Todo;