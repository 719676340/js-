Array.prototype.myflat=function(depth=1){
    return this.reduce((arrc,cur)=>{
        // console.log(arrc,cur)
        return Array.isArray(cur)&&depth>1?arrc.concat(cur.myflat(depth-1)):arrc.concat(cur)
    },[])
}

let flatArr = [[1,2],[4,5],[[9,3,4],4]];
let ans=flatArr.myflat(1)
console.log(ans)
// Array.prototype.myFlat2 = function (depth = 1) {
//     const arr = this.slice();
//     return depth > 0 ? arr.reduce((acc, cur) => {
//       return acc.concat(Array.isArray(cur) ? cur.myFlat2(depth - 1) : cur);
//     }, []) : arr.slice();
//   };
//   const arr1 = [1, 2, [[3], 4]];
//   // 不知道目标数组有几层的话，可以使用Infinity使得数组完全扁平化
//   console.log(arr1.myFlat2(2));
function myflat(list,depth=1){
    if(depth==0){
        return list
    }
    return list.reduce((a,b)=>{
        return a.concat(Array.isArray(b)?myflat(b,depth-1):b)
    },[])
}
console.log(myflat(flatArr,1))
// var x=[]
// var y=[1,2]
// console.log(x.concat(y))