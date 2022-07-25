function mysetTimeout(fn,a,b){
    let timer={
        id:-1
    }
    const start=(timeout)=>{
        timer.id=setTimeout(()=>{
            fn()
            start(timeout+b)
        },timeout)
    }
    start(a)
    return timer
}
function myClear(timer){
    clearTimeout(timer.id)
}
var a=new mysetTimeout(()=>{
    console.log(new Date().getSeconds())
},1000,1000)
// myClear(a)
