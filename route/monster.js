const router = require('express').Router();
const {
  getMonsters,
  getMonsterById,
  postMonster,
  updateMonster,
  deleteMonster
} = require('../controllers/monster');



router.get('/',getMonsters )

router.get('/:id',getMonsterById)

router.post('/',postMonster)

router.patch('/:id',updateMonster);

router.delete('/:id',deleteMonster);



module.exports = router;
