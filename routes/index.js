const express = require('express');
const router = express.Router();
const {format} = require('date-fns')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: format(new Date(), 'E d MMM y k:mm')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: format(new Date(), 'E d MMM y k:mm')
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
  messages.push({text:formMessage, user:formAuthor, added: format(new Date(), 'E d MMM y k:mm')})
  res.redirect('/');
})

module.exports = router;
