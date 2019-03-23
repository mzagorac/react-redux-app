const Contact = require("../models/Contact");

function getAllContacts(req, res) {
  Contact.find()
    .exec()
    .then(data => res.status(200).send(data))
    .catch(err => res.send(400).send("Unable to find data"));
}

function getOneContact(req, res) {
  const id = req.params.id;
  Contact.findById(id)
    .exec()
    .then(contact => res.status(200).send(contact))
    .catch(err => res.status(404).send("Unable to find cintact"));
}

function saveContact(req, res) {
  const contact = new Contact(req.body);
  contact.save(function(err, data) {
    if (err) return res.status(501).send("Unable to save contact");
    res.status(200).send(data);
  });
}

function editContact(req, res) {
  const id = req.params.id;
  const updatedContact = req.body;
  Contact.findByIdAndUpdate(id, updatedContact, { new: true }, (err, data) => {
    if (err) return res.status(501).send("Unable to update contact");
    return res.status(200).send(data);
  });
}

function deleteContact(req, res) {
  const id = req.params.id;
  Contact.findByIdAndRemove(id, (err, data) => {
    if (err) return res.status(501).send("Unable to delete selected contact");
    return res.status(200).send(data);
  });
}

module.exports.getAll = getAllContacts;
module.exports.get = getOneContact;
module.exports.save = saveContact;
module.exports.edit = editContact;
module.exports.remove = deleteContact;
