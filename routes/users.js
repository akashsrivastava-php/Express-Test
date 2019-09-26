var express = require('express');
var router = express.Router();
const User = require('../usersModel')

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/name', function(req, res){
  User.findAll()
      .then(response=>res.json(response))
      .catch(err=>console.log('err', err));
});

router.get('/send', function(req, res){
  const accountSid = 'AC80647cda037e68777b90aa0e6125409f';
  const authToken = '33df6d5b2c9603e79c26db33bda18c89';
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'your otp is 0000',
      from: '+12055576201',
      to: '+918299126500'
    })
    .then(message => res.json(message.sid))
    .catch(err=> res.json(err));
})

module.exports = router;
