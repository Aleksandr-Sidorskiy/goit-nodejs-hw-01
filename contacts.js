const fs = require('fs').promises;
const { error } = require('console');
const path = require('node:path');
const { nanoid } = require("nanoid");

    
//   Раскомментируй и запиши значение
 const contactsPath = path.join(__dirname, "db/contacts.json");
 
 // TODO: задокументировать каждую функцию
 async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
};
   
 
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.find((contact) => contact.id === contactId);

  return contactIndex || null;
};

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(contact => contact.id === contactId);
  if (contactIndex === -1) {
    return null;
  }
  const [result] = contacts.splice(contactIndex, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

async function addContact({ name, email, phone }) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}