Promise.myall=function(promises){
    let results=[]
    let promisecount=0
    let promiselen=promises.length
    return new Promise((reslove,reject)=>{
        for(let i=0;i<promiselen;i++){
            Promise.resolve(promises[i]).then((res)=>{
                results[i]=res
                promisecount++
                if(promisecount==promiselen){
                    return reslove(results)
                }
            },function(err){
                reject(err)
            })
        }
    })
}
let promise1 = new Promise(function(resolve) {
    resolve(1);
});
let promise2 = new Promise(function(resolve) {
  resolve(2);
});
let promise3 = new Promise(function(resolve,reject) {
  reject(3);
});
let promiseAll =Promise.myall([promise1, promise2, promise3]);
promiseAll.then(function(res) {
    console.log(res);
}).catch((err)=>{
    console.log(err);
})