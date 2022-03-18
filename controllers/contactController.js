const Contact = require("../models/Contact");

//while setting up DB

const contactListView = async (req, res) => {
    const contacts = await Contact.find();
    let user =  req.user;
    res.render("contact-list", { contacts: contacts, user: user });
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

const contactUpdate = async (req, res) => {
    const {
        id,
        firstName,
        lastName,
        organization,
        photo,
        workPhone,
        birthday,
        title,
        url } = req.body;

    const contact = await Contact.findByIdAndUpdate(
        id,
        {
        firstName: firstName,
        lastName: lastName,
        organization: organization,
        photo: photo,
        workPhone: workPhone,
        birthday: birthday,
        title: title,
        url: url
    });
    res.redirect('/contact/show/' + id);
}

const contactDelete = async (req, res) => {
    const { id } = req.body;

    const contact = await Contact.findByIdAndDelete(id);
    res.redirect('/');
}


module.exports = {
    contactListView,
    contactShowView,
    contactUpdateView,
    contactCreateView,
    contactCreate,
    contactUpdate,
    contactDelete,
};