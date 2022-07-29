function fangdou(fn,delay){
    let timer=null
    return function(){
        console.log(new Date(),'fangdou')
        if(timer){
            clearTimeout(timer)
            console.log(new Date(),'1111111')
        }
        timer=setTimeout(()=>{
            console.log(new Date(),'222222')
            timer=null
            fn()
        },delay)
    }
}
var action=fangdou(()=>{
    console.log('防抖')
},4000)
action()
console.log('防抖1')
setTimeout(()=>{
    console.log(new Date(),'333333')
    action()
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
// var action=jieliu(()=>{
//     console.log('防抖')
// },2000)
