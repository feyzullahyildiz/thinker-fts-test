import { getFeedFriendly } from "./fixeddata";
import { thinker, initDefaults } from "./thinker";
initDefaults();


thinker.feed(getFeedFriendly());

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
    console.log(line);
});

rl.once('close', () => {
     // end of input
 });