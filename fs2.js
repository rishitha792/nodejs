const {readFile,writeFile}=require('fs');
console.log("start")
readFile('./fourth.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})
writeFile('./fifth.txt',`hey fifth text i was written now`,(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    //console.log('done with this')
})
console.log('starting with next')

