const router = require('express').Router();
const {postSong,getSongs,getSong} = require('../controllers/song');


router.post('/',postSong);
router.get('/',getSongs);
router.get('/:id',getSong)






module.exports = router;
