var Organization = require('../models/organizationModel');

module.exports = {

  create: function(req, res) {
    Organization.create(req.body, function(err, result) {
      if (err) return res.status(500).json(err);
      return res.json(result);
    });
  },

  read: function(req, res) {
    Organization.find({})
    .exec(function(err, result){
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Organization.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

};