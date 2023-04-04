const { Reaction, User, Thought} = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find()
            .then((posts) => res.json(posts))
            .catch((err) => res.status(500).json(err));
    },
    getOneUser(req, res) {
        User.findOne({_id: req.params.userId})
            .then((post) => 
             !post
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(post)
          )
          .catch((err) => res.status(500).json(err));
    },
}