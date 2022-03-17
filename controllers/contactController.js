const Contact = require("../models/Contact");

//while setting up DB

const contactListView = async (req, res) => {
    const contacts = await Contact.find();
    console.log(contacts)
    res.render("contact-list", { contacts: contacts });
}

const contactShowView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    res.render("contact-show", {
        contact: contact
    });
}

const contactUpdateView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    res.render("contact-update", {
        contact: contact
    });
}

const contactCreateView = (req, res) => {
    res.render("contact-create", {});
}

const contactCreate = (req, res) => {
    const {
        firstName,
        lastName,
        organization,
        photo,
        workPhone,
        birthday,
        title,
        url } = req.body;

    const contact = new Contact({
        firstName: firstName,
        lastName: lastName,
        organization: organization,
        photo: photo,
        workPhone: workPhone,
        birthday: birthday,
        title: title,
        url: url
    });
    contact.save();
    res.redirect('/');
}


module.exports = {
    contactListView,
    contactShowView,
    contactUpdateView,
    contactCreateView,
    contactCreate
};