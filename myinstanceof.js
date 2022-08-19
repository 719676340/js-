function myinstanceof(left,right){
    if(typeof left !=='object'||!left){
        return false
    }
    var proto=Object.getPrototypeOf(left)
    while(proto){
        console.log(proto)
        if(proto==right.prototype){
            return true
        }
        proto=Object.getPrototypeOf(proto)
    }
    return false
}
function myinstanceof1(left,rigth){
    console.log(left.__proto__,rigth.prototype)
    if(typeof left !=='object'||!left){
        return false
    }
    var proto=left.__proto__
    while(proto){
        console.log(proto)
        if(proto==rigth.prototype){
            return true
        }
        proto=proto.__proto__
    }
    return false
}
var num=new Number(111)
console.log(num instanceof Number)
console.log(myinstanceof1(num,Number))