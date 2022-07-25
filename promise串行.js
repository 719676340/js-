var p1=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('p1')
            resolve()
        },1400)
    })
}
var p2=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('p2')
            resolve()
        },1300)
    })
}
var p3=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('p3')
            resolve()
        },1200)
    })
}
var x=[p1,p2,p3]
x.reduce((p,fn)=>{
    return p.then(fn)
},Promise.resolve())