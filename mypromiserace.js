Promise.myrace=function(list){
    return new Promise((resolve,reject)=>{
        list.forEach(item => {
            Promise.resolve(item).then((val)=>{
                resolve(val)
            },(err)=>{
                reject(err)
            })
        });
    })
}