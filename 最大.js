function help(arr,k){
    arr.sort((a,b)=>a-b)
    var num=[]
    for(let i=0;i<arr.length;i++){
        num.push(arr[i][1])
    }
    var max=0
    for(let i=1;i<=k;i++){
        for(let j=0;j<=arr.length-i;j++){
            max=Math.max(arr.reduce((a,b)=>a+b),max)
        }
    }
}
console.log(help(2,3,5,20))