// APIs to insert and retrieve the data from database
const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();

// get all users from the db
router.get('/', (req, res) => {
  User.find({}, (err, doc) => {
    if (!err) {
      res.status(200).json(doc);
    } else {
      res.status(500).json(err);
    }
  });
});

// create a new user and save into the db
router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    dob: new Date(req.body.dob).toISOString(),
    active: req.body.active,
  }, (err, doc) => {
    if (!err) {
      res.status(200).json(doc);
    } else {
      res.status(500).json({ error: err });
    }
  });
});

// to get a particular user details
router.get('/:id', (req, res) => {
  User.findOne({
    _id: req.params.id,
  }, (err, doc) => {
    if (!err) {
      res.status(200).json(doc);
    } else {
      res.status(500).json(err);
    }
  });
});

// to update a particular user details
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate({
    _id: req.params.id,
  }, {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    mobile: req.body.mobile,
    dob: req.body.dob,
    active: req.body.active,
  }, { new: true }, (err, doc) => {
    if (!err) {
      res.status(200).json(doc);
    } else {
      res.status(500).json(err);
    }
  });
});

// to delete a particular user
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove({
    _id: req.params.id,
  }, (err, doc) => {
    if (!err) {
      const response = {
        message: 'Todo successfully deleted',
        id: doc._id,
      };
      res.status(200).json(response);
    } else {
      res.status(500).json(err);
    }
  });
});

module.exports = router;
