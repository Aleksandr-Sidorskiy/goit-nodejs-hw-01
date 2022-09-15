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
    }
   
 
async function getContactById(contactId) {
  const contacts = await listContacts();
  const currentContact = contacts.find((contact) => contact.id === contactId);

  if (!currentContact) {
    return null;
  }
}
function removeContact(contactId) {
  console.log('removeContact')
}

function addContact(name, email, phone) {
  console.log('addContact')
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}