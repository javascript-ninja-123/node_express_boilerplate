const router = require('express').Router();
const {postHabitat,getHabitats,getHabitat,updateHabitat,deleteHabitat} = require('../controllers/habitat');



router.get('/',getHabitats);
router.get('/:id',getHabitat)
router.post('/',postHabitat);
router.patch('/:id',updateHabitat);
router.delete('/:id',deleteHabitat)






module.exports = router;
