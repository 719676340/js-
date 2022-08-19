function Scheduler(){
    this.queue=[]
    this.maxcount=2
    this.runcount=0
    this.add=function(promisefn){
        this.queue.push(promisefn)
    }
    this.taskstart=function(){
        for(let i=0;i<this.maxcount;i++){
            this.request()
        }
    }
    this.request=function(){
        if(!this.queue.length||this.runcount>=this.maxcount){
            return 
        }
        this.runcount++
        this.queue.shift()().then(()=>{
            this.runcount--
            this.request()
        })
    }
}
function timeout(time){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, time);
    })
}
var scheduler=new Scheduler()
function addtask(time,fn){
    scheduler.add(()=>{
        return timeout(time).then(()=>{
            console.log(fn)
        })
    })
}
addtask(1000, '1');
addtask(500, '2');
addtask(300, '3');
addtask(400, '4');
scheduler.taskstart()