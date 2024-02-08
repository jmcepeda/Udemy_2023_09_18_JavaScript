const path=require('path');

console.log(path);

filePath=path.join("dir","modulde","input","remember/rabo.js");

console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.parse(filePath));
console.log(path.resolve("dist"));



