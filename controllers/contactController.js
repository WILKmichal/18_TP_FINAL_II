//while setting up DB
const contacts = [
    {name: "alice", id:1},
    {name: "bob", id:2},
    {name: "charlie", id:3},
    {name: "debby", id:4},
]

const contactListView = (req, res) => {
    res.render("contact-list", { contacts} );
}

const contactShowView = (req, res) => {
    const id = req.params.id;
    const contact = contacts.find(c => c.id == id);
    res.render("contact-show", {
        contact: contact
    } );
}

const contactUpdateView = (req, res) => {
    const id = req.params.id;
    const contact = contacts.find(c => c.id == id);
    res.render("contact-update", {
        contact: contact
    } );
}

const contactCreateView = (req, res) => {
    res.render("contact-create", {} );
}

module.exports =  {
    contactListView,
    contactShowView,
    contactUpdateView,
    contactCreateView
};