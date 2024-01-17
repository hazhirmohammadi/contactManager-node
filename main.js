const {parse,scriptName,usage,version,command} = require("yargs");
const {addContact, listsContacts, removeContact} = require("./contacts");
const chalk = require("chalk");

scriptName(`${chalk.italic("contact manager")}`)
usage(`$0 ${chalk.red("<cammand>")} ${chalk.green("[args]")}`);
version("1.0.0")
command({
   command: "create",
   aliases: ["c", "ct"],
   describe: `${chalk.green("[Create new contact]")}`,
   builder: {
      fullname: {
         alias: "f",
         describe: "persons Full Name",
         demandOption: true,
         type: "string"
      },
      phone: {
         alias: "p",
         describe: "person phone Number",
         demandOption: true,
         type: "number"
      },
      email: {
         alias: "e",
         describe: "person phone email",
         demandOption: true,
         type: "string"
      }
   },
   handler(args) {
      addContact({
         fullname: args.fullname,
         phone: args.phone,
         email: args.email
      })
   }
})
command({
   command: "list",
   aliases: ["l"],
   describe: `${chalk.yellow("[listing ths save contacts]")}`,
   handler() {
      listsContacts();
   }
})
command({
   command: "remove",
   aliases: ["r"],
   describe: `${chalk.red("[ remove contact]")}`,
   builder: {
      fullname:{
         alias:"f",
         describe:"person fullname",
         demandOption:true,
         type:"string"
      }
   },
   handler(args) {

      removeContact(args.fullname);
   }
})

parse()

