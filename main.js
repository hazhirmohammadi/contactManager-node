const yargs = require("yargs");

yargs.command({
   command:"create",
   describe:"[Create new contact]",
   builder:{
      fullName:{
         describe:"persons"
      }
   }
})
console.log(yargs.argv)
