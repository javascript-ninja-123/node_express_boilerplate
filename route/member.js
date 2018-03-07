const router = require('express').Router();
const {addMember,getMembers,getMember,deleteMember,updateMember} = require('../controllers/member');


router.post('/',addMember);
router.get('/',getMembers);
router.get('/:id',getMember);
router.delete('/:id',deleteMember)
router.patch('/:id',updateMember)





module.exports = router;
