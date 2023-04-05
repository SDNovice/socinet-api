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
    
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
    },
    
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ message: 'User and associated apps deleted!' }))
          .catch((err) => res.status(500).json(err));
      },
    
}