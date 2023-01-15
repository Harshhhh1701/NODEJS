const fs= require('fs');

fs.mkdir("harsh",(err)=>{
    console.log("folder created");
});

fs.writeFile("harsh/bio.txt","Hello I am Harsh",(err)=>{
    console.log("file created");
});

fs.appendFile("harsh/bio.txt","I am a front end developer",(err)=>{
    console.log("updated");
})


fs.readFile("harsh/bio.txt", "utf8",(err,data)=>{
    console.log("noted");
    console.log(data);
    console.log(err);
});

fs.rename("harsh/bio.txt","harsh/mybio.txt",(err)=>{
    console.log(err);
    console.log("renamed");
});




fs.unlink("harsh/mybio.txt",(err)=>{
    console.log("deleted");
})
fs.rmdir("harsh",(err)=>{
    console.log("folder deleted");
})