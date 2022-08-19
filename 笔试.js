// 事件管理器  监听 解绑 触发事件 
function event(){
    this.obj=new Map()

    
    function add(mykey,myvalue){
        if(!this.obj.has(mykey)){
            this.obj.set(mykey,[myvalue])
        }else{
            this.obj.set(mykey,[...this.obj.get(mykey),myvalue])
        }
    }

    this.add2=function(mykey,myvalue){
        var sign=false
        return (function(){
            if(!sign){
                sign=true
                add(mykey,myvalue)
            }
        })()
    }
    // 添加  只执行一次 once 

    this.remove=function(mykey,myvalue){
        var list=this.obj.get(mykey)
        for(let i=0;i<list.length;i++){
            if(list[i]==myvalue){
                list.splice(i,1)
                break
            }
        }
        this.obj.set(mykey,list)
    }
    // emit
    this.handle=function(mykey,myvalue){
        var list=this.obj.get(mykey)
        for(let i=0;i<list.length;i++){
            list[i](myvalue)
        }
        // if(list.indexOf(myvalue)!=-1){
        //     myvalue()
        // }
    }

}
