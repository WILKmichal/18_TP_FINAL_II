var express = require('express');
var router = express.Router();
const Contact = require("../models/Contact");
const pdfService = require('../fileGenerator/pdf');


const contactPdf = async (req, res) => {
    const contact = await Contact.findById(req.query.id);
    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment;filename=contact.pdf`,
      });
      pdfService.buildPDF(
        (chunk) => stream.write(chunk),
        () => stream.end(),
        contact
      );
}

module.exports = {
    contactPdf
};
