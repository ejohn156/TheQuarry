const db = require("../models")

module.exports = {
    find: function (req, res) {
        // db.Profile
        //     .findOne({_id: req.body.id})
        //     .populate("jobs")
        //     .sort({ date: -1 })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err))
        db.Job.find({}).sort({date: -1}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findUsersJobs: function(req,res){
        db.Profile
            .findOne({_id: req.params.id})
            .populate("jobs")
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findFiltered: function(req,res){
        db.Job.find({category: req.params.filter}).sort({date: -1}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Job
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.Job
            .create(req.body)
            .then(newJob => {
                return db.Profile.findOneAndUpdate({_id: req.body.creatorID}, {$push: {jobs: newJob._id}}, {new: true})})
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