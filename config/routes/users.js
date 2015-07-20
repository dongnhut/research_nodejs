var express = require('express');
var router = express.Router();

var users = require('users_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* get users login. */
router.get('/signup', users.new);
router.post('/signup', users.create);

router.get('/:id', users.show);

router.get('/login', users.login);
router.post('/login', users.action_login);


module.exports = router;
