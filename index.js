const fs=require ('fs');
const path=require('path');


fs.mkdir(path.join(__dirname,"test"),{},(err)=>{
    if(err){
    console.log(err);
    }
    else
        console.log("folder created...");
});


fs.writeFile(path.join(__dirname,"test","test.txt"),"my file","utf-8",(err)=>{
    if(err)
    {
        console.log(err);
    }else{
        console.log("file wrote...");
    }

})


fs.appendFile(path.join(__dirname,"test","test.txt")," is test.txt","utf-8",(err)=>{
    if(err)
    {
        console.log(err);
    }else{
        console.log("file appended...");
    }

})


fs.readFile(path.join(__dirname,"test","test.txt"),"utf-8",(err,data)=>{
    if(err)
        console.log(err);
    console.log(data);
})


fs.rename(path.join(__dirname,"test","test.txt"),path.join(__dirname,"test","test2.txt"),
(err)=>{
    if(err) console.log(err);
    console.log("file renamed");
});