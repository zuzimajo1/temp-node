const path = require("path");

const path2 = path.join("/contentpath", "server", "text.txt");
console.log(path2);

//returns the last path
const path3 = path.basename(path2);
console.log(path3);

//returns the absolute path
const absolute = path.resolve(__dirname, "/contentpath", "server", "text.txt");
console.log(absolute);
