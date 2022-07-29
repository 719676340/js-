function myinstanceof(left,right){
    if(typeof left !=='object'||!left){
        return false
    }
    var proto=Object.getPrototypeOf(left)
    while(proto){
        if(proto==right.prototype){
            return true
        }
        proto=Object.getPrototypeOf(proto)
    }
    return false
}
var num=new Number(111)
console.log(num instanceof Number)
console.log(myinstanceof(num,Number))