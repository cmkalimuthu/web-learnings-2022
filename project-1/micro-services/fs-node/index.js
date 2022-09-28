const fs=require('fs');
const path =require('path')
//get file names form dir ->if there open it ->write or appened ->read the file ->close the file
//create file by three method open,appendFile,writeFile
/*
//apendFile add specific content else create the file
function closeFd(fd){
    fs.close(fd,(err)=>{
        if(err) throw err;
        console.log('file close')
        return;
    })
}
//open the file if no err append the file if err throw else close the file
fs.open('./sample1.txt','a',(err,fd)=>{
    if(err) throw err;
    try{
    fs.appendFile(fd,'apending the content','utf8',(err)=>{
        if(err) throw err;
        console.log("content appended to file")
        
        closeFd(fd);
    })}catch(err){
        closeFd(fd);
        comsole.log(err);
    }
}
)

//write replaces the specified file if exist else create and insert || update the file has two methods append and writeFile

fs.writeFile('./sample.txt','write file',(err)=>{
    if(err) throw err;
    console.log('file has written')
})

//delete the file
fs.unlink('./sample1.txt',(err)=>{
    if(err) throw err;
    console.log('sample file duplicate deleted')
})

//create file if not available 
fs.appendFile('./sample1.txt','apending the content','utf8',(err)=>{
    if(err) throw err;
    console.log("content appended to file")
  
}
)

//rename file 
// fs.rename('./sample.txt','./sampleFile.txt',(err)=>{
//         if(err) throw err;
//         console.log('file renamed')
// })


//read file using implicit and explicit buffer
const buf=Buffer.alloc(1024)
fs.open('./sample.txt','r+',(err,fd)=>{
    if(err) throw err;
    console.log('file has opened')

    //explicit buffer
    fs.read(fd,buf,0,buf.length,0,(err,bytes)=>{
        if(err) throw err
        console.log('read the file')
        if(bytes>0){
            console.log(buf.toString())
        }
    })

    //inbuild buffer
    fs.readFile('./sample.txt',(err,data)=>{
        if(err) throw err;
        console.log(data.toString())
    })
})
// Using fs.exists() method
fs.exists('/etc/passwd', (exists) => {
  console.log(exists ? 'Found' : 'Not Found!');
});

//get current file name in directory
function getCurrentFilenames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
      console.log(file);
    });
    console.log("\n");
  }

  getCurrentFilenames()

//to create directory or folder
  fs.mkdir(path.join(__dirname,'test'),{recursive:true},(err)=>{
    if(err) throw err;
    console.log('folder created'+__dirname) 
})

//remove content whole or from index
fs.truncateSync('./sample.txt',0,(err)=>{
    if(err) throw err;
    console.log('file conetent deleted')
})

//remove directory recursive is to del if folder is not empty else throw err
fs.rmdir(path.join(__dirname,'test'),{recursive:true},(err)=>{
    if(err) throw err;
    console.log('folder created'+__dirname) 
})

//status about file or directory if bigint false shows date in format else diff format
fs.stat('./sample.txt',{ bigint: false },(err,stat)=>{
    if(err) throw err;
    console.log(stat)
})

*/




