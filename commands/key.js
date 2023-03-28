import inquirer from "inquirer";
import colors from "colors";
import KeyManager from "../lib/KeyManager.js";
import isRequired from "../helper/validation.js";

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter API key ".green + "https://coinapi.io",
        validate: isRequired,
      },
    ]);

    const key = keyManager.setKey(input);
    if (key) {
      console.log("API Key set".blue);
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      console.log("Current API key", key.key.yellow);
      return key;
    } catch (error) {
      console.log(error.message);
    }
  },
  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();

      console.log("Key removed".blue);
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default key;
