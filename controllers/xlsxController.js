const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();
const { xlsxGenerator } = require("../fileGenerator/xlsx");



const contactXlsx = async (req, res) => {
    const excel = new xlsxGenerator("test");
    const buffer = excel.buildBuffer();
    res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);

    // depreciated need fixing
    res.end(new Buffer(buffer, 'base64'));
}

module.exports = {
    contactXlsx
};
