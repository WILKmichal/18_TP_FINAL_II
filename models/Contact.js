const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    organization: {
        type: String,
        required: false,
    },
    photo: {
        type: String,
        required: false,
    },
    workPhone: {
        type: String,
        required: false,
    },
    birthday: {
        type: Date,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    user_id: {
        type: String,
        required: true,
    },
});
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;