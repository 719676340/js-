function row(arr,index){
    console.log(arr[index])
    arr[index].unshift(arr[index].pop())
}
function col(arr,index){
    var fin=arr[0][index]
    for(let i=1;i<arr.length;i++){
        arr[i-1][index]=arr[i][index]
    }
    arr[arr.length-1][index]=fin  
}

function help(q,arr1,action){
    var arr=arr1
    for(let i=0;i<q;i++){
        if(action[i][0]==1){
            row(arr,action[i][1]-1)
        }else{
            col(arr,action[i][1]-1)
        }
    }
    console.log(arr)
}
var arr=[['1','2','3'],
    ['4','5','6'],
    ['7','8','9']]
var action=[[2,2],[1,2]]
help(2,arr,action)

