var express = require('express');
var router = express.Router();
var readFile=require('../app.js')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.post('/checklogin',(req,res)=>{
  let {username,password}=req.body
  console.log(username,password)
  res.send('1')
})

module.exports = router;
