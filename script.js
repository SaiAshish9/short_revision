const { watch } = require("fs");

console.log(process.env);
console.log("hi");
console.log(process.argv);

const readline = require("readline"),
  execSync = require("child_process").execSync;

const num = -1;

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
//  With strict mode, you can not, for example, use undeclared variables.
// setBreakpoint("script.js", 27, "num < 0");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// cont, c: Continue execution
// next, n: Step next
// step, s: Step in
// out, o: Step out
// pause: Pause running code (like pause button in Developer Tools)

// debugger
// debug> exec('num')
// next
// ctrl + c
// .exit
// debug> repl
// NODE_INSPECT_RESUME_ON_START=1 node inspect script.js

rl.question("What's your name?  ", function (answer) {
  console.log("Hello " + answer);
  rl.close();
});

// NODE_INSPECT_RESUME_ON_START=1 node inspect script.js
// https://nodejs.org/api/debugger.html

// const output = execSync("ls", { encoding: "utf-8" }); // the default is 'buffer'
// console.log("Output was:\n", output);

// const countWords = (words) => {
//   let map = {};
//   words.forEach((word) => {
//     // debugger;
//     watch("word");
//     //   watch('word') watch('word.length')
//     if (word in map) {
//       map[word] = 1;
//     } else {
//       map[word] += 1;
//     }
//     // debugger;
//   });

//   return map;
// };

// console.log(countWords("jkashkjhdakjshjkhdsa"));
