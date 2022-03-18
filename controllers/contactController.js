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

function fString(property) {
    if (!property) return "";

    return property + ";"
}

function stringIfSet(property) {
    if (!property) return "";
    return "" + property;
}

function buildVCardQRString(contact) {
    const vcard = {
        str_vcard: 'BEGIN:VCARD\nVERSION:3.0\n',
        str_end: '\nEND:VCARD',
        goog_chart: 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl='
    }
    let N = "";
    N += fString(contact.title);
    N += fString(contact.lastName);
    N += fString(contact.firstName);

    let FN = "";
    FN += stringIfSet(contact.title) + " ";
    FN += stringIfSet(contact.lastName) + " ";
    FN += stringIfSet(contact.firstName);

    const ORG = fString(contact.organization);

    const TEL = fString(contact.workPhone);

    const BDAY = fString(contact.birthday);

    const TITLE = fString(contact.title);

    const URL = fString(contact.url);

    vcard.str_vcard += `N:${N}\n`;
    vcard.str_vcard += `FN:${FN}\n`;
    vcard.str_vcard += `ORG:${ORG}\n`;
    vcard.str_vcard += `TEL:${TEL}\n`;
    vcard.str_vcard += `BDAY:${BDAY}\n`;
    vcard.str_vcard += `TITLE:${TITLE}\n`;
    vcard.str_vcard += `URL:${URL}\n`;



    vcard.str_vcard += vcard.str_end;

    return vcard.goog_chart + encodeURIComponent(vcard.str_vcard);

}

const contactShowView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    if (!(contact.user_id == req.user.id)) {
        console.log("redirect")
        res.redirect('/contact/list');
        return;
    }

    const QR = buildVCardQRString(contact);

    res.render("contact-show", {
        contact: contact,
        qr: QR
    });
}

const contactUpdateView = async (req, res) => {
    const id = req.params.id;
    const contact = await Contact.findById(id).exec();
    if (!(contact.user_id == req.user.id)) {
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