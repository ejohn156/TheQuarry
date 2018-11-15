const db = require("../models")

module.exports = {
    find: function (req, res) {
        // db.User
        //     .findOne({_id: req.body.id})
        //     .populate("services")
        //     .sort({ date: -1 })
        //     .then(dbModel => res.json(dbModel))
        //     .catch(err => res.status(422).json(err))
        db.Service.find({}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findFiltered: function(req,res){
        db.Service.find({category: req.params.filter}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Service
            .findByID(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        console.log(req.body)
        db.Service
            .create(req.body).then(dbModel => res.json(dbModel))
            // .then(newService => {
            //     return db.User.findOneAndUpdate({_id: req.body.id}, {$push: {Services: newService._id}}, {new: true})
            // })
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