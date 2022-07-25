Function.prototype.mycall=function(obj,...args){
    let fn=this
    obj=(obj==null||obj==undefined)?window:Object(obj)
    obj.fn=fn
    args=args||[]
    let res=obj.fn(...args)
    delete obj.fn
    return res
}
Function.prototype.myapply=function(obj,arr){
    let fn=this
    obj=(obj==null||obj==undefined)?window:Object(obj)
    obj.fn=fn
    arr=arr||[]
    let res=obj.fn(...arr)
    delete obj.fn
    return res
}
Function.prototype.mybind=function(obj,...args1){
    let fn=this
    obj=(obj==null||obj==undefined)?window:Object(obj)
    return function(...args2){
        obj.fn=fn
        let arg=[...args1,...args2]
        let res=obj.fn(...arg)
        delete obj.fn
        return res
    }
}

function help(...x){
    console.log(this.a,x)
}
help.mybind({a:12},[1,2])([3,4])