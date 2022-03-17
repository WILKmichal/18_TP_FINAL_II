var express = require('express');
var router = express.Router();
// var xlsx = require('node-xlsx');


/* GET users listing. */
router.get('/downloadExcel/:firstName/:lastName/:organisation:/photo:/workphone/:birthday/:title/:url', function (req, res, next) {
     console.log(req.params);
    // const excel = new xlsxGenerator([]);
    // const buffer = excel.buildBuffer();
    // res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);
    // res.end(new Buffer(buffer, 'base64'));
    res.send('respond with a resource');
});


module.exports = router;
