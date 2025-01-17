const { program } = require("commander");

const key = require('../commands/key.js');
const { api } = require("../constants.js");

program
  .command("set")
  .description(`Set API Key -- Get your API key from ${api}`)
  .action(key.set);

program
  .command("show")
  .description("Show API Key")
  .action(key.show);

program
  .command("remove")
  .description("Remove API Key")
  .action(key.remove);

program.parse(process.argv);
