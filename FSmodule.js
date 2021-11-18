const { readFileSync, readFile, writeFileSync, writeFile } = require("fs");

//Sync FS MODULES
//reading the file
const first = readFileSync("./contentpath/first.txt", "utf8");
const second = readFileSync("./contentpath/second.txt", "utf8");

// console.log(first);
// console.log(second);

//writing the file

// writeFileSync('./content/result.txt', `Here is the result : ${first}, ${second}`, { flag : 'a'});

//Async FS MODULES

readFile("./contentpath/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const second = result;
  writeFile(
    "./contentpath/first.txt",
    `Here is the result: ${first}, ${second}`,
    (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(result);
    }
  );
});
