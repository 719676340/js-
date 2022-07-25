function creatArray(...elements){
    let handler={
        get(target,propkey,receiver){
            let index=Number(propkey)
            if(index<0){
                index+=target.length
            }
            return Reflect.get(target,index,receiver)
        }
    }
    let target=[]
    target.push(...elements)
    return new Proxy(target,handler)
}
let arr=creatArray('a','b','c')
console.log(arr[-1])