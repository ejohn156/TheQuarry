const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.Application
            .find({})
//            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findUsersApplications: function(req,res){
        console.log(req.params.id)
        db.Profile
            .findOne({_id: req.params.id})
            .populate("applications")
            .populate("requests")
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findReceivedApplications: function(req,res){
        console.log(req.params.id)
        db.Application.find({recipientID : req.params.id})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findFiltered: function(req,res){
        db.Job.find({category: req.params.filter}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Application
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Application
            .create(req.body)
            .then(newApplication => {
                return db.Profile.findOneAndUpdate({_id: req.body.applicantID}, {$push: {applications: newApplication._id}}, {new: true})
            })
            .catch(err => res.status(422).json(err));
    },
    
    update: function (req, res) {
        db.Application
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Application
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
},
};