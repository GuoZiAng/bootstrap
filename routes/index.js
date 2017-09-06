var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')
var url = require('url')
// var PATH = './';
// var path = 'path';

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("1")
  // fs.readFile(path.join(__dirname, '..', 'data.json'), function(err, data){
  //   fs.readFile(PATH+'data.jason', function(err, data){
  // console.log("2:"+JSON.stringify(err))
  //   if(err){
  //           return res.send({
  //               status:0,
  //               info:err.message
  //           });
  //       }
  //   var obj = [];
  //   try{
  //     obj = JSON.parse(data.toString());
  //   }catch(e){
  //     obj =[];
  //   }

      // let html = "<html></html>"
      // res.write()
    // res.write(JSON.stringify(obj))
    // res.writeHead
    // res.end("rnf")

  // });
  //  res.send({
  //           status:1,
  //           data:obj
  //       });
  res.sendFile(path.join(__dirname, '..', 'public', 'tt.html'));
});

router.get('/sti',function(req, res, next){
  //the data from client
  var clientObj = url.parse(req.url,true)
  var clientData = clientObj.query.aaa
  console.log('the data from client on server : '+clientData)

    //read the jason file
    fs.readFile(path.join(__dirname, '..', 'data.json'), function(err, data){
    // fs.readFile(PATH+'data.jason', function(err, data){
    console.log("2:"+JSON.stringify(err))
    if(err){
            return res.send({
                status:0,
                info:err.message
            });
        }
    var obj = [];
    try{
      obj = JSON.parse(data.toString());
    }catch(e){
      obj =[];
    }

   res.send({
            status:1,
            data:obj
        });
  });

  // res.send({
  //   a:'got the data',
  //   b:'from server'
  // })
})



// router.get('/sss/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
