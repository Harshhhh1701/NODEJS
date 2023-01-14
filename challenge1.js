const fs= require('fs');
//creating a folder
fs.mkdirSync("harsh");

fs.writeFileSync("harsh/bio.txt","Hello I am Harsh");

fs.appendFileSync("harsh/bio.txt"," I AM A FRONTEND DEVELOPER");

const content=fs.readFileSync("harsh/bio.txt", "utf8");

console.log(content);

fs.renameSync("harsh/bio.txt","harsh/mybio.txt");


fs.unlinkSync("harsh/mybio.txt")
fs.rmdirSync("harsh")

//challenge 1 completed