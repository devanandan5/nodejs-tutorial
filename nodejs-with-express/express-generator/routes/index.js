var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const valuse=["abhi","devil","noob","dk","dikan"]
  const person={name:"rahul",admin:true}
  res.render('index', {person});
});

module.exports = router;
