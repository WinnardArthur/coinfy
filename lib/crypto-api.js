const axios = require("axios");

const { apiEndpoint } = require("../constants");

class CryptoAPI {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseUrl = apiEndpoint;
  }

  async getPriceData(coinOption, curOption) {
    try {
      const res = await axios({
        url: `${this.baseUrl}/v1/cryptocurrency/quotes/latest?symbol=${coinOption}&convert=${curOption}`,
        method: "get",
        headers: {
          "X-CMC_PRO_API_KEY": this.apikey,
        },
      });

      const results = res?.data?.data;

      let data = "";

      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption,
      });

      Object.keys(results).forEach((key) => {
        const coin = results[key];

        const coinPrice = coin?.quote?.[curOption]?.price;

        data += `  Coin: \x1b[33m${coin?.symbol}\x1b[39m (${
          coin?.name
        }) | Price: \x1b[32m${formatter.format(
          coinPrice
        )}\x1b[39m | Rank: \x1b[34m${coin?.cmc_rank}\x1b[39m\n`;
      });

      return data;
    } catch (err) {
      if (err?.status === 401) {
        throw new Error(
          "Your API key is invalid - Get a key at " + apiEndpoint
        );
      } else if (err?.status === 404) {
        throw new Error("Your API is not responding...");
      } else {
        throw new Error("Something went wrong");
      }
    }
  }
}

module.exports = CryptoAPI;
