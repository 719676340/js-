// 两个数  每个删除一位数 这样看什么时候才能相等或者整除
function help(a,b){
    var ans=Infinity
    function help2(a,b,num){
        if(a<1||b<1){
            return
        }
        if(a%b==0||b%a==0){
            ans=Math.min(ans,num)
        }
        var stra=''+a
        var strb=''+b
        var arra=stra.split('')
        var arrb=strb.split('')
        for(let i=1;i<arra.length;i++){
            var temp=arra.slice(i)
            help2(Number(temp.join('')),b,num+arra.length-i)
        }
        for(let i=1;i<arrb.length;i++){
            var temp=arrb.slice(i)
            help2(a,Number(temp.join('')),num+arra.length-i)
        }
    }
    help2(a,b,0)
    return ans
}
var a=1234
var b=99
console.log(help(a,b))



// function help(arr){
//     var nums=[...new Set(arr)]
//     nums.sort((a,b)=>a-b)
//     var left=nums[nums.length-2]
//     var right=nums[nums.length-1]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i-1]==arr[i]&&left==arr[i]){
//             left++
//         }
//         if(arr[i-1]==arr[i]&&right==arr[i]){
//             right++
//         }
//         if(left>=right){
//             right=left+1
//         }        
//     }
//     var ans=Infinity
//     var temp=0
//     for(let i=0;i<arr.length;i++){
//         if(i%2==0){
//             temp+=left-arr[i]
//         }else{
//             temp+=right-arr[i]
//         }
//     }
//     ans=Math.min(ans,temp)
//     temp=0
//     for(let i=0;i<arr.length;i++){
//         if(i%2==1){
//             temp+=left-arr[i]
//         }else{
//             temp+=right-arr[i]
//         }
//     }
//     ans=Math.min(ans,temp)
//     return ans
// }
// var arr=[2,1,3,2,4]
// var arr=[1,1,4,5,1,4]
// console.log(help(arr))



// function help(str){
//     var index=1
//     var ans=0
//     var same=1
//     var num=0
//     while(index<str.length){
//         if(str[index]=='e'){
//             num++
//             if(1+index<str.length&&str[1+index]=='e'){
//                 same++
//             }else if(1+index<str.length&&str[1+index]!='e'){
//                 ans+=Math.ceil(same/2)
//                 same=1
//             }else if(1+index==str.length){
//                 ans+=Math.ceil(same/2)
//             }
//         }
//         index++
//     }
//     return num-ans
// }
// var str='reddee'
// console.log(help(str))


// var arr=[3,1,3,4,3,4]
// function help(arr){
//     var ans=0
//     for(let i=0;i<arr.length-2;i++){
//         for(let j=i+1;j<arr.length-1;j++){
//             for(let k=j+1;k<arr.length;k++){
//                 if(arr[i]==arr[k]&&arr[i]>arr[j]){
//                     ans++
//                 }
//             }
//         }
//     }
//     return ans
// }
// console.log(help(arr))



