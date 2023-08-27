var express = require('express');
var router = express.Router();
const indexController = require('../controller/index')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/detail', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/webhook/url', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/make/payment', indexController.initializePayments)
router.post('/verify/payment', indexController.verifyPayment)
module.exports = router;


