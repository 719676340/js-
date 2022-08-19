// function curry(fn){
//     return function judge(...args){
//         return fn.length===args.length?fn(...args):(...arg)=>judge(...args,...arg)
//     }
// }
// function add(a,b,c){
//     return a+b+c
// }
// // const curryadd=curry(add)
// // console.log(curryadd(2)(1)(1))
// function add(...args){
//     return args.reduce((a,b)=>a+b)
// }
// function currying(fn){
//     let arg=[]
//     return function temp(...newArgs){
//         if(newArgs.length){
//             arg=[...arg,...newArgs]
//             return temp
//         }else{
//             let val=fn.apply(this,arg)
//             arg=[]
//             return val
//         }
//     }
// }
// let curryadd=currying(add)
// console.log(curryadd(2)(1)(1)(1)())



function add(){
    const _args = [...arguments];
    function fn() {
      _args.push(...arguments);
      if(arguments.length!=0){
        return fn;
      }else{
        return _args.reduce((sum, cur) => sum + cur);
      }
      
    }
    fn.toString = function() {
      return _args.reduce((sum, cur) => sum + cur);
    }
    return fn;
}
console.log(add(1)(2)(3)(4)())