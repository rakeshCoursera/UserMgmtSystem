const express = require('express');
const path = require('path');

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = router;
