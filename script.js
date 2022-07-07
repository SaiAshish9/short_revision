console.log(process.env)
console.log("hi")
console.log(process.argv)

var readline = require('readline');

const num = -1

// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
//  With strict mode, you can not, for example, use undeclared variables.
setBreakpoint('script.js', 27, 'num < 0')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// debugger

// next
// ctrl + c
// debug> repl
// NODE_INSPECT_RESUME_ON_START=1 node inspect script.js

rl.question("What's your name?  ", function(answer) {
   console.log("Hello " + answer);
   rl.close();
});

// NODE_INSPECT_RESUME_ON_START=1 node inspect script.js
// https://nodejs.org/api/debugger.html