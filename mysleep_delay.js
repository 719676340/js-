function mysleep(time){
    return new Promise((reslove,reject)=>{
        return setTimeout(reslove,time)
    })
}
function mydelay(func,time,...args){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            Promise.resolve(func(...args)).then(reslove).catch(reject)
        },time)
    })
}
console.log(new Date());
mydelay(
  (str) => {
    console.log(new Date());
    return str;
  },
  3000,
  "shanyue"
).then((o) => console.log(o));