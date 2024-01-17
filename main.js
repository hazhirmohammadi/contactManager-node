const yargs = require("yargs");

yargs.command({
   command: "create",
   aliases:["c","ct"],
   describe: "[Create new contact]",
   builder: {
      fullname: {
         alias: "f",
         describe: "persons Full Name",
         demandOption: true,
         type: "string"
      },
      phone:{
         alias:"p",
         describe: "person phone Number",
         demandOption: true,
         type: "number"
      },
      email:{
         alias:"e",
         describe: "person phone email",
         demandOption: true,
         type: "string"
      }
   },
   handler(args){

      console.log(args.fullname,args.email,args.phone)
   }
})
yargs.parse()
// console.log(yargs.argv)
