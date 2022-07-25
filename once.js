function once(fn){
    var res
    var sign=false
    return function(...args){
        if(sign){
            return res
        }
        sign=true
        res=fn(...args)
        return res
    }
}
const f = (x) => x;
const onceF = once(f);
console.log(onceF(3))
console.log(onceF(4))