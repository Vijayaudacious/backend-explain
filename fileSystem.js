// need to learn for file system  for example write file, copyfile, rename,unlink,appendfile

const fs = require("fs");

// fs.writeFile("xyz.txt", "hello how are you", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

// exting file me xyz.txt me data append hoga appned file se both are same

//--------------------------------------------------------------------------------------------------------//

// fs.appendFile("xyz.txt", "i am fine and how are you", function (err) {
//   if (err) console.error(err);
//   else console.log("Done");
// });

//--------------------------------------------------------------------------------------------------------//

// fs.rename("xyz.txt", "abc.txt", (err) =>
//   err ? console.log("err", err) : console.log("Done")
// );

//--------------------------------------------------------------------------------------------------------//

// fs.copyFile("abc.txt", "./Copy/qwe.txt", (err) =>
//   err ? console.log("err", err) : console.log("Done")
// );

//--------------------------------------------------------------------------------------------------------//

// unlink mins file delete karna

// fs.unlink("abc.txt", (err) =>
//   err ? console.log("err", err.message) : console.log("Removed")
// );

//--------------------------------------------------------------------------------------------------------//

// rmdir remove blind folder blank folder
// if folder me data hai to { recursive: true }, ki help se folder delete kar sakte hai

fs.rmdir("./Copy", { recursive: true }, (err) =>
  err ? console.log("err", err.message) : console.log("Removed Folder")
);
