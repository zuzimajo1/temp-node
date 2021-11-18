//GLOBAL - NO WINDOW!!!

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)

//Built-in Modules
//OS, PATH, FS, HTTP

const names2 = require("./names");
const functioname = require("./function");
const modules = require("./modules");
require("./mindgrenade");
console.log(modules);

functioname("Kate");
functioname(names2.Peter);
functioname(names2.John);

//local
const secret = "SUPER SECRET";

//share
const Peter = "Peter";
const John = "John";

module.exports = { Peter, John }; //exporting variables through objects
