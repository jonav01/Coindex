import axios from "axios";
import colors from "colors";

class CryptoAPI {
  constructor(apikey) {
    this.apikey = apikey;
    this.baseUrl = "https://rest.coinapi.io/v1/exchangerate";
  }

  async getPriceData(coinOptions,currOptions) {
    try {
      const res = await axios.get(`${this.baseUrl}/${coinOptions}?invert=false`, {
        headers: {
          "X-CoinAPI-Key": this.apikey,
        },
      });
      const ratesArray = res.data.rates;
      return ratesArray.find(elem => elem.asset_id_quote === currOptions)
    
    } catch (err) {
      console.log(err);
    }
  }
}

export default CryptoAPI;
