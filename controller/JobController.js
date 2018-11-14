const db = require("../models")

module.exports = {
    find: function (req, res) {
        // db.User
        //     .findOne({_id: req.body.id})
        //     .populate("jobs")
        //     .sort({ date: -1 })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err))
        db.Job.find({}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Job
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Job
            .create(req.body)
            .then(newJob => res.json(newJob)
                // return db.User.findOneAndUpdate({_id: req.body.id}, {$push: {Jobs: newJob._id}}, {new: true})
            )
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Job
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Job
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}