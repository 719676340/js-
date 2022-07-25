function help(s){
    var map=new Map()
    var max=0
    for(let i=0;i<s.length;i++){
        if(!map.has(s[i])){ 
            map.set(s[i],i)
        }else{
            max=Math.max(max,i-map.get(s[i])-1)
        }
    }
    return max
}
// 看一下 实例2   S[i]
console.log(help('fwejfldskjf'))