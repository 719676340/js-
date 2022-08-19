// function fangdou(fn,delay){
//     let timer=null
//     return function(){
//         if(timer){
//             clearTimeout(timer)
//         }
//         timer=setTimeout(()=>{
//             timer=null
//             fn()
//         },delay)
//     }
// }
// var action=fangdou(()=>{
//     console.log('防抖')
// },4000)
// action()
// console.log('防抖1')
// setTimeout(()=>{
//     console.log(new Date(),'333333')
//     action()
// },2000)

// function jieliu(fn,delay){
//     let timer
//     let flag=true
//     return function(){
//         if(!flag){
//             return
//         }
//         flag=false
//         timer=setTimeout(()=>{
//             fn()
//             flag=true
//         },delay)
//     }
// }
// var action=jieliu(()=>{
//     console.log('防抖')
// },2000)
function debounce(fn,time){
    var timer=null
    return function(...args){
        console.log(timer)
        clearTimeout(timer)
        console.log(timer)
        timer=setTimeout(()=>{
            fn.apply(this,args)
        },time)
    }
}
function a(){
    console.log('11111')
}
var x=debounce(a,1000)
x()
x()
x()