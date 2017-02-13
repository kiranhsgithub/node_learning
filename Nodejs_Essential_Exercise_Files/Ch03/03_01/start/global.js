var hello = "Hellow World from Node js";

console.log("Hello, World!");
console.log("Global Hello ", global.hello);
console.log("Module Hello ", hello);
global.console.log("Hello, Global World!");

var justNode = hello.slice(17);

console.log(`Rock on World from ${justNode}`);