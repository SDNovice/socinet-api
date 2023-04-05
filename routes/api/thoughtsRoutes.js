const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createThought,
    updateThoughts,
    deleteThought,
} = require('../../controllers/thoughtsContoller');

router.route('/')
      .get(getThoughts)
      .post(createThought);

router.route('/:thoughtId')
      .get(getOneThought)
      .put(updateThoughts)
      .delete(deleteThought);

module.exports = router;