const db = require("../models")

module.exports = {
    find: function (req, res) {
        db.Request
            .find({})
//            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findFiltered: function(req,res){
        db.Job.find({category: req.params.filter}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findReceivedRequests: function(req,res){
        console.log(req.params.id)
        db.Request.find({recipientID : req.params.id})
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Request
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Request
            .create(req.body)
            .then(newRequest => {
                return db.Profile.findOneAndUpdate({_id: req.body.requesterID}, {$push: {requests: newRequest._id}}, {new: true})
            })
            .catch(err => res.status(422).json(err));
    },
    
    update: function (req, res) {
        db.Request
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Request
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
},
accept: function (req, res) {
    db.Request
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
decline: function (req, res) {
    db.Request
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
},
};