const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback, contact) {
    const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

    doc.on('data', dataCallback);
    doc.on('end', endCallback);

    doc.fontSize(25).text('Contact', 100, 80);

    doc.fontSize(12).text(`prénom :` + contact.firstName, 100, 120);
    doc.fontSize(12).text(`nom :` + contact.lastName, 100, 140);
    doc.fontSize(12).text(`titre :` + contact.title, 100, 160);

    let date = new Date(contact.birthday);
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    newdate = year + "/" + month + "/" + day;

    doc.fontSize(12).text(`anniversaire :` + newdate, 100, 180);
    doc.fontSize(12).text(`organization :` + contact.organization , 100, 200);
    doc.fontSize(12).text(`téléphone :` + contact.workPhone, 100, 220);
    doc.end();
}

module.exports = { buildPDF };