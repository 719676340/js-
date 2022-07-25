function myassign(target,source){
    if(arguments.length<2){
        return target
    }
    source=Array.prototype.slice.call(arguments,1)
    source.forEach(element => {
        for(key in element){
            if(Object.prototype.hasOwnProperty.call(element,key)){
                target[key]=element[key]
            }
        }
    });
    console.log(target)
    return target
}
const obj1 = {a: {b: 1}};
const obj2 = myassign({}, obj1);
console.log(obj1,obj2)
obj1.a.b = 2;
obj2.a.b // 2
console.log(obj1,obj2)