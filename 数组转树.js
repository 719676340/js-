let input=[
    {
        id:1,
        val:'学校',
        parentid:null
    },
    {
        id:2,
        val:'班级1',
        parentid:1
    },
    {
        id:3,
        val:'班级2',
        parentid:1
    },
    {
        id:4,
        val:'学生1',
        parentid:2
    },
    {
        id:5,
        val:'学生2',
        parentid:3
    },
    {
        id:6,
        val:'学生3',
        parentid:3
    }
]
function arrayToTree(array){
    let root=array.shift()
    let tree={
        id:root.id,
        val:root.val,
        children:ToTree(root.id,array)
    }
    return tree
}
function ToTree(id,array){
    let arr=[]
    for(let node of array){
        if(node.parentid==id){
            var temp={
                id:node.id,
                val:node.val,
                children:ToTree(node.id,array)
            }
            arr.push(temp)
        }
    }
    return arr
}
var ans=arrayToTree(input)
console.log(ans)