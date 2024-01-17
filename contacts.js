const fs = require("fs");
const chalk = require("chalk");

const addContact = (fullname, phone, email) => {
   const contacts = loadContacts();
   contacts.push({fullname, phone, email});
   console.log(chalk.green("contact Saved"));
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
module.exports={
   addContact,
}
