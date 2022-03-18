const { urlencoded } = require('express');
var express = require('express');
var router = express.Router();
const { xlsxGenerator } = require("../fileGenerator/xlsx");
const Contact = require("../models/Contact");

const contactXlsx = async (req, res) => {
    const contacts = await Contact.find(user_id = req.id);
    const excel = new xlsxGenerator("firstName", "lastName", "organization", "photo", "workPhone", "birthday", "title", "url");
    contacts.forEach((contact) => {
        excel.addARow(
            contact.firstName, contact.lastName, contact.organization, contact.photo, contact.workPhone, contact.birthday, contact.title, contact.url
        )
    })


    const buffer = excel.buildBuffer();
    res.writeHead(200, [['Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']]);

    // depreciated need fixing
    res.end(new Buffer(buffer, 'base64'));
}

module.exports = {
    contactXlsx
};
