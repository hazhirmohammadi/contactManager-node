const fs = require("fs");
const chalk = require("chalk");

const addContact = (args) => {
   const contacts = loadContacts();
   const duplicateContact = contacts.find(c => c.fullname === args.fullname);
   if (!duplicateContact) {
      contacts.push({fullname: args.fullname, phone: args.phone, email: args.email});
      saveContact(contacts)
      console.log(chalk.green("contact Saved"));
   } else {
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
   const data = JSON.stringify(contacts)
   fs.writeFileSync('contacts.json', data);
}
const listsContacts = () => {
   const contacts = loadContacts();
   if (contacts.length > 0) {
      console.log(chalk.yellowBright("your contacts:\n"));
      // console.table(contacts)
      contacts.forEach(contact => {
         console.log(`\t ${chalk.blue("full name:")} ${contact.fullname}`);
         console.log(`\t ${chalk.blue("email:")} ${contact.email}`);
         console.log(`\t ${chalk.blue("phone:")} ${contact.phone}`);
         console.log(chalk.redBright("\t --------------------------"));
      })
   } else {
      console.log(chalk.red("you dont have any contacts"))
   }
}

const removeContact = fullname => {
   const contact = loadContacts();

   const filteredContact = contact.filter(c => c.fullname !== fullname);
   if (contact.length > filteredContact.length) {
      saveContact(filteredContact)
      console.log(chalk.greenBright(`${fullname} has been removed`));
   }else {
      console.log(chalk.red("contact not found"))
   }

}
module.exports = {
   addContact,
   listsContacts,
   removeContact,
}
