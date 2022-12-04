const logMemory = () => {
  const fix = (f: number) => (f / 1000000).toFixed(3) + "MB";
  const v = process.memoryUsage();
  const total = fix(v.heapTotal);
  const used = fix(v.heapUsed);
  console.log(`total: ${total} used: ${used}`);
};
const v8 = require("v8");
const { memorySizeOf } = require("./memoryUsage");
const logObjectMemory = (key: string, obj: any) => {
  const len = memorySizeOf(obj);
  //   const len = (v8.serialize(obj).length / 1024).toFixed(2);
  console.log(`Memory (${key}): ${len}`);
};

logMemory();

import { getAsMap, getFeedFriendly } from "./fixeddata";
import { thinker, initDefaults } from "./thinker";
initDefaults();

thinker.feed(getFeedFriendly());

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
const dataAsMap = getAsMap();
logObjectMemory("getFeedFriendly", getFeedFriendly());
logObjectMemory("dataAsMap", dataAsMap);
logObjectMemory("thinker", thinker);
rl.on("line", (text) => {
  console.clear();
  console.log(`SEARCH KEY: ${text}`);
  logMemory();
  const res = thinker.find(text) as any;

  const docs = res.documents.splice(0, 10) as any[];
  const textRes = docs
    .map((d: any) => dataAsMap.get(d.id))
    .filter((a) => a)
    .map((a) =>
      [
        `ID: ${a.id}`,
        `Marka: ${a.marka}`,
        `Firma: ${a.firmaAdi}`,
        `kategoriAdi: ${a.kategoriAdi}`,
      ].join("\n")
    );
  console.log(textRes.join("\n\n"));
  console.log("...");
  console.log("...");
  logMemory();
});
// console.clear();
console.log("TYPE SOMETHING AND ENTER: ");
rl.once("close", () => {
  // end of input
});
