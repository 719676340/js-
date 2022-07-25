Array.prototype.myreduce=function(fn,initnum){
    var arr=Array.prototype.slice.call(this)
    var res
    var startindex
    res=initnum?initnum:arr[0]
    startindex=initnum?0:1
    for(let i=startindex;i<arr.length;i++){
        console.log(res)
        res=fn.call(null,res,arr[i])
    }
    return res
}
var x=[1,2,3]
console.log(x.myreduce((a,b)=>a+b))