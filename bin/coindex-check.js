import { program } from "commander";
import check from "../commands/check.js";

program
  .command("price")
  .description("Check price of coins")
  .option('--coin <type>', 'Add specific coin types in CSV format' , 'BTC,ETH,XRP')
  .option('--curr <currency>', 'Change the currency' , 'USD')
  .action((cmd) => check.price(cmd))
  .parse(process.argv);
