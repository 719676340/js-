function obsever(){
    this.arr=[]
}
obsever.prototype.subscribe=function (key,callback){
    if(!this.arr[key]){
        this.arr[key]=[]
    }
    this.arr[key].push(callback)
}
obsever.prototype.publish=function(key,content){
    this.arr[key].forEach(element => {
        element(content)
    });
}
obsever.prototype.remove=function(key,callback){
    if(!this.arr[key]){
        return
    }
    if(!callback){
        this.arr[key]=undefined
    }
    this.arr[key]=this.arr[key].filter((item)=>{
        return item!=callback
    })
}
var obsever=new obsever()
var a=function f1(content){
    console.log('f1',content)
}
var b=function f2(content){
    console.log('f2',content)
}
obsever.subscribe('1',a)
obsever.subscribe('1',b)
obsever.publish('1','123')
obsever.remove('1',b)
obsever.publish('1','123')

