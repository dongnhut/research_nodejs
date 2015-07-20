/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
//Load all models
require('./../models/user.js'); 
var User = mongoose.model('User');


/**
 *  Show profile
 */

exports.show = function (req, res) {
  console.log(req.params);
  if (req.params.id){
    user = User.findOne({_id: new ObjectID(req.params.id)});
    if(user){
      console.log(user.name);
      res.render('users/show', {
        title: user.name,
        user: user
      });
    }
  }
};

/**
 * Show sign up form
 */

exports.new = function (req, res) {
  res.render('users/signup', {
    title: 'Sign up',
    user: new User()
  });
};

/**
 * acction sign up
 */

exports.create = function (req, res) {
  console.log(req.body);
  
  var user = new User(req.body)
  // user.email = req.body.email;
  user.save();
  
  // res.render('users/signup', {
  //   title: 'Sign up',
  //   user: new User()
  // });
};


/**
 * Show login form
 */

exports.login = function (req, res) {
  res.render('users/login', {
    title: 'Login'
  });
};



exports.action_login = function (req, res) {
  
  console.log(req.body);

  // res.render('users/show', {
  //   title: 'Login'
  // });
};