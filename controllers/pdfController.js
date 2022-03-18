var express = require('express');
var router = express.Router();
const Contact = require("../models/Contact");

const contactPdf = async (req, res) => {
    const contacts = await Contact.find(user_id = req.id);
    contacts.forEach((contact) => {
        console.log(contact.firstName, contact.lastName, contact.organization, contact.photo, contact.workPhone, contact.birthday, contact.title, contact.url)
    })


}

module.exports = {
    contactPdf
};
