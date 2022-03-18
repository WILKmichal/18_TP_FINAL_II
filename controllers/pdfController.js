var express = require('express');
var router = express.Router();
const Contact = require("../models/Contact");

const contactPdf = async (req, res) => {
    const contact = await Contact.findById(req.query.id);
    console.log(contact);
    // contacts.forEach((contact) => {
    //     console.log(contact.firstName, contact.lastName, contact.organization, contact.photo, contact.workPhone, contact.birthday, contact.title, contact.url)
    // })


}

module.exports = {
    contactPdf
};
