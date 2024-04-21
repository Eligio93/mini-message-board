const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages:messages });
});
/* GET form page */
router.get('/new', function(req, res, next) {
  res.render('form');
});
/* POST request from form*/
router.post('/new',function(req,res){
  let formAuthor=req.body.author
  let formMessage=req.body.text
  messages.push({text:formMessage, user:formAuthor, added: new Date()})
  res.redirect('/');
})

module.exports = router;
