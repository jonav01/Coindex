import KeyManager from "../lib/KeyManager.js";
import CryptoAPI from "../lib/cryptoAPI.js";
import colors from "colors";
const check = {
  async price(cmd) {
    const keyManager = new KeyManager();
    const key = keyManager.getKey();
    const cryptoData = new CryptoAPI(key.key);

    try {
      // currency formatter
      const formatCurrency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: cmd.curr,
      });

      const price = await cryptoData.getPriceData(cmd.coin, cmd.curr);
      const formattedCurrency = formatCurrency.format(price.rate);
      console.log(
        `Price of ${cmd.coin} is ${formattedCurrency} in ${cmd.curr}`.blue
      );
    } catch (error) {
      console.log(error.message.red);
    }
  },
};

export default check;
