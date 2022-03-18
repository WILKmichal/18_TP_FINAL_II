const Contact = require("../models/Contact");

//while setting up DB

const contactListView = async (req, res) => {
    let user = req.user;
    const contacts = await Contact.find({ user_id: user.id });
    res.render("contact-list", { contacts: contacts, user: user });
}

const contactListRedirect = async (req, res) => {
    res.redirect('/contact/list');
}

const contactShowView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    console.log(contact.user_id)
    console.log(req.user.id)
    if (!(contact.user_id == req.user.id)) {
        console.log("redirect")
        res.redirect('/contact/list');
        return;
    }
    
    console.log('render')
    res.render("contact-show", {
        contact: contact
    });
}

const contactUpdateView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    if (!contact.user_id == req.user.id) {
        res.redirect('/contact/list');
        return;
    }

    res.render("contact-update", {
        contact: contact
    });

}

const contactCreateView = (req, res) => {
    res.render("contact-create", { user: req.user });
}

const contactCreate = (req, res) => {
    const {
        userID,
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
        url: url,
        user_id: userID
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
    contactListRedirect,
    contactShowView,
    contactUpdateView,
    contactCreateView,
    contactCreate,
    contactUpdate,
    contactDelete,
};