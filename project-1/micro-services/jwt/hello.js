const express=require('express')
const debug=require('debug')
const app = express();

app.get('/hello',(err,res)=>{
    console.log('express')
    res.send('<h1>Hello welcome to js tutorial</h1>')
})

app.listen(8080,(port)=>{
    debugger;
    console.log("app running successfully in port"+process.env.port)
})

//================ Node js app Docker Process ===========

//dev local system
//install node js in local system 
//install express for app
//create app and expose 8080 and run using "node hello.js"

//create docker file with node details and app run details 


//if app folder not avail local vm system
//create a git account in web and create repo and put all the files to repo
//git install
//git login
//~ current directory
//git pull 
//now all files needed to run app will be there in virtual machine hello.js,package.json,Dockerfile

//sudo docker -build -t hello-app:1.0.0

//docker hub
//create docker hub acc and create a repo
//docker login
//docker tag local-image:hello-app:1.0.0 practise:hello-app:1.0.0
//docker push practise:hello-app:1.0.0
//docker push sijukali/practise:hello-app:1.0.0
//mkdir demo
//cd demo
//docker pull sijukali/practise:hello-app:1.0.0
//image will be there in demo folder now

//sudo docker run -p 8080:8080 hello-app:1.0.0
//localhost:8080/hello or 127.0.1.1:8080/hello

//next will be kubernetes









