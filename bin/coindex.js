#!/usr/bin/env node

import { program } from "commander";
import fs from "fs";
import path from "path";
import __dirname from "../helper/filename.js";

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf-8")
);

program
  .version(pkg.version)
  .command("key", "Manage API keys -- https://coinapi.io")
  .command("check" , 'Check coin price info')
  .parse(process.argv);
