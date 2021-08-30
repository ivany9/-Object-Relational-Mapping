const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagdata=await Tag.findAll({
      include:[{model:Product, as: 'Products'}]
    });
    res.status(200).json(tagdata);
   }catch(err){
     res.status(500).json(err);
   }
 });


router.get('/:id', async (req, res) => {
  try{
    const tagdata=await Tag.findByPk(req.params.id,{
      include:[{model:Product, as: 'Products'}]
    });
    if(!tagdata){
       res.status(404).json({message:'No Categories found with that id!'});
       return;
      }
      res.status(200).json(tagdata);
    } catch(err){
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    const tagdata = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
