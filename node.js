const { readFileSync } = require("fs"),
  execSync = require("child_process").execSync;

// node node.js "https://www.themancompany.com";

const result = {};

function checkUrl(element) {
  // process.argv[2]

  try {
    const output = execSync(`curl -I ${element} | grep shopify`, {
      encoding: "utf-8",
    });
    return output?.includes("x-shopify-stage");
  } catch (e) {}
}

let data = readFileSync(
  "/Users/saiashishdarapureddy/Desktop/folders/temp/cred/sample.csv",
  "utf-8"
);

data = data.split("\n").map((x) => x.split(/\r/).filter((y) => y != ""));

data.forEach((d) => {
  if (d != "Year" && !(d in result)) result[d] = checkUrl(d);
});

console.log(result);
