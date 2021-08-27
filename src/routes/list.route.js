const {Router} = require('express');

const router = Router();

router.get('', (req,res)=>{
  try{
    const {list} = req.body;
  } catch(e){
    res.status(500).json({message: "Неизвестная ошибка"})
  }
}) 

module.exports = router;