var express = require('express');
var router = express.Router();
const {xlsxGenerator }= require("../fileGenerator/xlsx");


/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query)
    const excel = new xlsxGenerator("test");
    const buffer = excel.buildBuffer();
    res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);
    res.end(new Buffer(buffer, 'base64'));
});


module.exports = router;
