function repaet(func,times,waits){
    return async function(...args){
        for(let i=0;i<times;i++){
            await sleep(func,waits,args)
        }
    }
}
async function sleep(fn,wait,args){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            fn.apply(this,args)
            resolve()
        },wait)
    })
}
const repeatFunc = repaet(alert, 4, 3000);
repeatFunc('1')