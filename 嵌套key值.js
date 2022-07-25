var obj = {
    a: "12",
    b: "23",
    first: {
      c: "34",
      d: "45",
      second: { 3: "56", f: "67", three: { g: "78", h: "89", i: "90" } },
    },
};
function getallkey(obj){
    var ans=[]
    Object.keys(obj).forEach((key)=>{
        if(obj[key] instanceof Object){
            ans.push(...getallkey(obj[key]))
        }else{
            ans.push(key)
        }
    })
    return ans
}
console.log(getallkey(obj))