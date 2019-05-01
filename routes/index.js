const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', {user:req.user});
});

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.render('secret', {user:req.user});
});

router.get('/not-secret', (req, res, next) => {
  res.render('not-secret', {user:req.user});
});

function isLoggedIn(req,res,next) {
  if(req.user){
    next()
  } else {
    res.redirect('/login')
  }
}

module.exports = router;
