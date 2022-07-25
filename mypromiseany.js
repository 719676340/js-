Promise.myany=function(list){
    var rejectarr=[]
    return new Promise((resolve,reject)=>{
        list.forEach(item => {
            Promise.resolve(item).then((val)=>{
                resolve(val)
            },(err)=>{
                rejectarr.push(err)
                if(rejectarr.length==list.length){
                    reject(rejectarr)
                }
            })
        });
    })
}