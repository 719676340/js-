function mynew(obj,...args){
    var newobj=Object.create(obj.prototype)
    const res=obj.apply(newobj,args)
    return res instanceof Object?res:newobj
}

function mynew(obj,...rest){
    var newobj=Object.create(obj.prototype)
    let res=obj.apply(newobj,rest)  
    // console.log(res,newobj)
    if(res instanceof Object){
        return res
    }else{
        return newobj
    }
}
function person1(a){
    this.name='11111'
    this.id=a
    return {
        id:0
    }  
    // 显式的返回一个对象 这个对应res的部分  
    // 如果没有返回就是newobj的部分
}
var other=mynew(person1,'22222')
console.log(other)
console.log(other instanceof person1)