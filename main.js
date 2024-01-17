const yargs = require("yargs");
const {addContact} = require("./contacts");
const chalk = require("chalk");

yargs.command({
   command: "create",
   aliases: ["c", "ct"],
   describe: "[Create new contact]",
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
yargs.command({
   command: "list",
   aliases: ["l"],
   describe: `${chalk.yellow("[listing ths save contacts]")}`,
   handler() {

   }
})

yargs.parse()
// console.log(yargs.argv)
