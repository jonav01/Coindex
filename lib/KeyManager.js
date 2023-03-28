import Configstore from "configstore";
import fs from "fs";
import path from "path";
import __dirname from "../helper/filename.js";

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8")
);

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No api key found -- Get a key at https://nomics.com");
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");
    if (!key) {
      throw new Error("No api key found -- Get a key at https://nomics.com");
    }
    this.conf.delete("apiKey");
    return;
  }
}

export default KeyManager;
