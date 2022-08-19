Array.prototype.myfilter=function(fn,thisArg){
    var res=[]
    for(let i=0;i<this.length;i++){
        if(fn.call(thisArg,this[i],i)){
            res.push(this[i])
        }
    }
    return res
}
var x=[1,2,3,4,5,6]
var y=x.myfilter(function(element,index){
    console.log(element)
    return element%2==0
})
console.log(y)