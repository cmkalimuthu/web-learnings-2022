//================ fs operations using stream ==================
//create stream,on-data,on-end,on-err
const fs = require("fs");
const zlib=require('zlib')
// var data = "";
// var readerStream = fs.createReadStream("streams/input.txt");
// readerStream.setEncoding("utf8");
// readerStream.on("data", function (chunk) {
//   data += chunk;
// });

// readerStream.on("end", function () {
//   console.log(data);
// });

// readerStream.on("error", function (err) {
//   console.log(err);
// });
// console.log("Program ended");

//create stream,write,end,final
// var data="hello this is stream"
// var writeStream=fs.createWriteStream('streams/input.txt')
// writeStream.write(data)
// writeStream.end();
// writeStream.on('finish',()=>{
//     console.log('data written')
// })
// writeStream.on('error',(err)=>{
//     console.log(err.stack)
// })
// console.log("Program ended");

//pipe for reading from one file  and using that output  to writing into another file
// var readStream=fs.createReadStream('streams/input.txt')
// var writeStream=fs.createWriteStream('streams/output1.txt')

// readStream.pipe(writeStream);
// console.log("pipe ended")

//stream chaining for continous operations reading and compressing and writing contents

// fs.createReadStream('streams/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
// console.log('file compressed')

//decompressing

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('streams/input.txt'))
console.log('file de-compressed')
