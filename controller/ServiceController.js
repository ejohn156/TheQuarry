const db = require("../models")

module.exports = {
    find: function (req, res) {
        // db.Profile
        //     .findOne({_id: req.body.id})
        //     .populate("services")
        //     .sort({ date: -1 })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err))
        db.Service.find({}).sort({date: -1}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findUsersServices: function(req,res){
        db.Profile
            .findOne({_id: req.params.id})
            .populate("services")
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findFiltered: function(req,res){
        db.Service.find({category: req.params.filter}).sort({date: -1}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Service
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.Service
            .create(req.body)
            .then(newService => {
                return db.Profile.findOneAndUpdate({_id: req.body.creatorID}, {$push: {services: newService._id}}, {new: true})
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Service
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Service
            .findById(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}