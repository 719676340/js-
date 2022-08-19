// async function help(){
//     console.log(11111)
//     return new Promise((resolve,reject)=>{
//         resolve(222221)
//     })
// }
// async function help2(){
//     var p
//     await help().then((res)=>{
//         p=res
//     })
//     console.log(p)
// } 
// help2()

// async function timeout(sec){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,sec)
//     })
// }
// async function dofunc(fn,sec){
//     await timeout(sec).then(()=>{
//         fn()
//         console.log(new Date())
//     })
// }
// var arr=[1,2,3,4,5,6]

// async function help(){
//     for(let i=0;i<arr.length;i++){
//         await dofunc(()=>{
//             console.log(arr[i])
//         },1000)
//     }
//     return 1
// }
// Promise.all(arr.map(async function(item,index){
//     await dofunc(()=>{
//         console.log(item)
//     },1000)
// })).then(()=>{
//     print()
// })
// async function help2(){
//     await help()
//     await print()
// }
// help2()
// async function print(){
//     console.log(10)
// }
// async function help3(){
//     for(let i=0;i<arr.length;i++){
//         await timeout(1000)
//         console.log(arr[i])
//     }
//     console.log(10)
// }
// function main() {
//     try {
//         setTimeout(() => {
//             throw new Error('async error')
//         }, 1000)
//     } catch (e) {
//         console.log(e, 'err')
//     }
// }
// main();
// function fun1(value) {
//     return  new Promise((resolve,reject)=> {
//         setTimeout(function(callback){
//             resolve(++value)
//         },2000)
//     }) 
// }

// async function asy() {
// let v = 0
//     v = await fun1(v)
//     console.log(v)
//     v = await fun1(v)
//     v = await fun1(v)
//     console.log(v)
// }  
// asy() //4

// async function fn(){
//     return 100
// }
// (async function(){
//     const a=fn()
//     const b=await fn() //await相当于是then 
//     console.log(a,b)
// })()
// function runAsync (x) {
//     const p = new Promise(r => setTimeout(() => r(x, console.log(x)), 1000))
//     return p
// }
// Promise.all([runAsync(1), runAsync(2), runAsync(3)])
// .then(res => console.log(res))

// 使用Promise实现红绿灯交替重复亮 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：


// function red(){
//     console.log('red')
// }
// function green(){
//     console.log('green')
// }
// function yellow(){
//     console.log('yellow')
// }
// var light=function(fn,cd){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             fn()
//             console.log(new Date())
//             resolve()
//         },cd)
//     })
// }
// var step=function(){
//     Promise.resolve().then(()=>{
//         return light(red,3000)
//     }).then(()=>{
//         return light(yellow,2000)
//     }).then(()=>{
//         return light(green,1000)
//     }).finally(()=>{
//         step()
//     })
// }
// step()
// function mergePromise(arr){
//     var data=[]
//     var promise=Promise.resolve()
//     arr.forEach(element => {
//         promise=promise.then(element).then((res)=>{
//             data.push(res)
//             return data
//         })
//     });
//     return promise
// }

console.log(num);
function num() {
    console.log("hello world");
}
var num = 666;
console.log(num);




