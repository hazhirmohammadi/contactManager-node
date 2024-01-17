const fs = require("fs");
const chalk = require("chalk");

const addContact = (args) => {
   const contacts = loadContacts();
   const duplicateContact = contacts.find(c => c.fullname === args.fullname);
   if (!duplicateContact) {
      contacts.push({fullname:args.fullname, phone:args.phone, email:args.email});
      saveContact(contacts)
      console.log(chalk.green("contact Saved"));
   }else{
      console.log(chalk.red("contact already exist"));
   }

}

const loadContacts = () => {
   try {
      const dataBuffer = fs.readFileSync("contacts.json");
      const contacts = dataBuffer.toString();
      return JSON.parse(contacts)
   } catch (ex) {
      console.log(ex);
      return [];
   }
}

const saveContact = contacts => {
  const data=JSON.stringify(contacts)
   fs.writeFileSync('contacts.json',data);
}
module.exports = {
   addContact,
}
