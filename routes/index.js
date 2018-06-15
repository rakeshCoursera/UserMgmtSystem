const express = require('express');

const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  res.render('index', { title: 'Raw Engineering' });
});

/* router.get('/*', (req, res) => {
  res.render('index', { title: 'Raw Engineering' });
}); */

module.exports = router;
