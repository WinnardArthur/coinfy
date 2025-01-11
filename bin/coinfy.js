#!/usr/bin/env node

const { program } = require("commander");

const pkg = require("../package.json");
const { api } = require("../constants");

program
  .version(pkg.version)
  .command("key", "Manage API Key -- " + api)
  .command("check", "Check Coin Price Info")
  .parse(process.argv);
