const express=require('express');
const router=express.Router(); 
const usersController=require('../controllers/users_controller');
console.log("hello");
router.get('/create',usersController.create);
router.get('/delete',usersController.delete);

module.exports=router;