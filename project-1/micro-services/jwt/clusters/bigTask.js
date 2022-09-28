function getComputation(){
    let sum=0;
    for(let i=0;i<1e8;i++){
        //some large computation
        sum+=1
    }
    return sum;
}

process.on('message',(message)=>{
    if(message == 'start'){
        const sum=getComputation();
        process.send(sum);
    }
})