const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

function compose(...fns){
    console.log(fns)
    return function(...args){
        return fns.reverse().reduce((a,b)=>{
            console.log(a,b,b(a))
            return b(a)
            // console.log()
        },...args)
    }
}

console.log(compose(add10, mul10, add100)(10))
console.log([1,2,3,4,5,6,7].reduce((a,b)=>{
    console.log(a,b)
    return a+b
}))