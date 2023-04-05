const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createUser,
    deleteUser,
} = require('../../controllers/usersContoller')
router.route('/')
      .get(getUsers)
      .post(createUser);

router.route('/:userId')
      .get(getOneUser)
      .delete(deleteUser);

module.exports = router;