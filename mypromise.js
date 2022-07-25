function mypromimse(constructor){
    let self=this
    self.status='pending'
    self.value=undefined
    self.reason=undefined
    function reslove(value){
        if(self.status==='pending'){
            self.value=value
            self.status='resolved'
        }
    }
    function reject(reason){
        if(self.status==='pending'){
            self.reason=reason
            self.status='rejected'
        }
    }

    try{
        constructor(reslove,reject)
    }catch(e){
        reject(e)
    }
}
mypromimse.prototype.then=function(onFullfilled,onRejected){
    let self=this
    switch(self.status){
        case 'resolved':onFullfilled(self.value);break
        case 'rejected':onRejected(self.reason);break
    }
}

var p=new mypromimse((resolve,reject)=>{
    resolve(1)
})
p.then((value)=>{
    console.log(value)
},)