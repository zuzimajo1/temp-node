const os = require("os");

//info about the current user
const info = os.userInfo();
console.log(info);

//uptime

console.log(`The uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOS);
