const router = require('express').Router();
const {getLives,JoinTablesForLives,JoinTablesForMonsters}  = require('../controllers/live');



router.get('/', getLives);
router.get('/habitat',JoinTablesForLives)
router.get('/monster',JoinTablesForMonsters)


module.exports = router;
