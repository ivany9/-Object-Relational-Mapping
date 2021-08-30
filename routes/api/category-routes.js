const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
   try{
   const categorydata=await Category.findAll({
     include:[{model:Product}],
   });
   res.status(200).json(categorydata);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
 try{
  const categorydata=await Category.findByPk(req.params.id,{
    include:[{model:Product}],
  });
  if(!categorydata){
     res.status(404).json({message:'No Categories found with that id!'});
     return;
    }
    res.status(200).json(categorydata);
  } catch(err){
    res.status(500).json(err);
  }
});
  


router.post('/', async (req, res) => {
  try {
    const categorydata = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categorydata);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categorydata = await Category.update({
      category_name: req.body.category_name},
      {
      where:{
      id:req.params.id,
      },  
    });
    if(!categorydata){
      res.status(404).json({message:'No Categories found with that id!'});
      return;
     }
     res.status(200).json(categorydata);
   } catch(err){
     res.status(500).json(err);
   }
 });
router.delete('/:id', async (req, res) => {
  try {
    const categorydata = await Category.destroy({
      where:{
      id:req.params.id,
      },  
    });
    if(!categorydata){
      res.status(404).json({message:'No Categories found with that id!'});
      return;
     }
     res.status(200).json(categorydata);
   } catch(err){
     res.status(500).json(err);
   }
 });

module.exports = router;
