// const colors = require("colors");

const KeyManager = require("../lib/KeyManager.js");
const { apiEndpoint } = require("../constants");
const { isRequired } = require("../utils/validations.js");

const key = {
  // Set key function
  async set() {
    try {
      const keyManager = new KeyManager();
      await keyManager.init();

      const inquirer = (await import("inquirer")).default;

      const input = await inquirer.prompt([
        {
          type: "input",
          name: "apikey",
          message: "\x1b[32mEnter API Key\x1b[39m " + apiEndpoint,
          validate: isRequired,
        },
      ]);

      const key = keyManager.setKey(input.apikey);

      if (key) {
        console.log("\x1b[34mAPI Key Set\x1b[39m", key);
      }
    } catch (error) {
      console.log(`\x1b[31m${error}\x1b[39m`);
    }
  },
  // Display key
  async show() {
    try {
      const keyManager = new KeyManager();
      await keyManager.init();

      const key = keyManager.getKey("apikey");

      console.log("\x1b[33mCurrent API Key:\x1b[39m", key);

      return key;
    } catch (error) {
      console.log(`\x1b[31m${error}\x1b[39m`);
    }
  },
  // Remove key
  async remove() {
    const keyManager = new KeyManager();
    await keyManager.init();

    try {
      const keyManager = new KeyManager();
      await keyManager.init();

      keyManager.deleteKey("apikey");

      console.log("\x1b[33mKey Removed... \x1b[39m");
    } catch (error) {
      console.log(`\x1b[31m${error}\x1b[39m`);
    }
  },
};

module.exports = key;
