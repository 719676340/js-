function fangdou(fn,delay){
    let timer
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn()
        },delay)
    }
}
var action=fangdou(()=>{
    console.log('防抖')
},2000)

function jieliu(fn,delay){
    let timer
    let flag=true
    return function(){
        if(!flag){
            return
        }
        flag=false
        timer=setTimeout(()=>{
            fn()
            flag=true
        },delay)
    }
}
var action=jieliu(()=>{
    console.log('防抖')
},2000)
