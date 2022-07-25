// function add(num){
//     var count=num
//     var A = function(l){
//         count+=l
//         return A
//     }
//     A.prototype.valueOf=function(){
//         return count
//     }
//     return A
// }
// var c=add(1)(3)(3)
// console.log(c)
// 这个是有问题 不知道为什么不能够弹出 

function agent(){
    console.log('agent')
}
agent.prototype.func=function(param){
    console.log(param)
    return this
}
A=new agent()
A.func(1).func(2).func(3)