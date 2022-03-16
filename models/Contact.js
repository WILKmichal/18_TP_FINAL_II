const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
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
});
const Contact = mongoose.model("Contact", ContactSchema);
module.exports = Contact;