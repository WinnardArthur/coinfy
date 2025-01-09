const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/crypto-api");

const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      await keyManager.init();

      const key = keyManager.getKey("apikey");

      const api = new CryptoAPI(key);

      const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutputData);
    } catch (error) {
      console.log(`\x1b[31m${error}\x1b[39m`)
    }
  },
};

module.exports = check;
