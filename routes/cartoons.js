var express = require('express');
var router = express.Router();
var db = require('../db/queries');

// GET request to '/cartoon' - get all cartoons
router.get('/', function(req, res, next) {
  db.cartoons.list().then(function(cartoons) {
      res.json(cartoons);
  });
});

// GET request to '/cartoon/1' - get cartoon with id of 1
router.get('/:id', function(req, res, next) {
    db.cartoons.get(req.params.id).then(function(cartoon) {
      res.json(cartoon);
  });
});

// POST request to '/cartoon' - create a new cartoon
router.post('/', function(req, res, next) {
    db.cartoons.create(req.body).then(function(id) {
      res.json({cartoon_id: id[0]});
  });
});

// PUT request to '/cartoon/:id' - update a cartoon
router.put('/:id', function(req, res, next) {
    db.cartoons.update(req.body, req.params.id).then(function() {
      res.send('updated')
    });
});

// DELETE request to '/cartoon/:id' - delete a cartoon
router.delete('/:id', function(req, res, next) {
    db.cartoons.delete(req.params.id).then(function() {
      res.send('deleted');
    });
});

module.exports = router;
