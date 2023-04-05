const { Reaction, User, Thought} = require('../models') 

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((posts) => res.json(posts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({_id: req.params.userId})
            .then((post) => 
             !post
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(post)
          )
          .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thoughts.create(req.body)
          .then((thoughts) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thoughtss: thoughts._id } },
              { new: true }
            );
          })
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'thoughts created, but found no user with that ID',
                })
              : res.json('Created the thoughts 🎉')
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
      updateThoughts(req, res) {
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtsId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thoughts) =>
            !thoughts
              ? res.status(404).json({ message: 'No thoughts with this id!' })
              : res.json(thoughts)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
        },
 deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtsId },
              { $pull: { thoughtss: req.params.thoughtsId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'thoughts created but no user with this id!',
            })
          : res.json({ message: 'thoughts successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
}