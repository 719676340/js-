var obj = { a: {a: "kobe", b: 39} };
// var ans=JSON.parse(JSON.stringify(obj))
// console.log(ans)


function deepclone(obj){
    if(typeof obj != 'object'){
        return obj
    }
    var temp= Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] == 'object'){
                temp[key]=deepclone(obj[key])
            }else{
                temp[key]=obj[key]
            }
        }
    }
    return temp
}
// var ans=deepclone(obj)
// console.log(ans==obj)


function deepclone1(obj){
    if(typeof obj !='object'){
        return obj
    }
    var temp=Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] =='object'){
                temp[key]=deepclone(obj[key])
            }else{
                temp[key]=obj[key]
            }
        }
    }
    return temp
}
// var ans=deepclone1(obj)
// console.log(ans)
// var otherobject=Object.assign({},obj)


function shallowclone(obj){
    if(typeof obj !='object'){
        return obj
    }
    var newobj=obj instanceof Array?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newobj[key]=obj[key]
        }
    }
    return newobj
}
var otherobject=shallowclone(obj)
console.log(otherobject)
