function myajax(url,method,data1,timeout,success,error){
    var method=(method||'get').toLowerCase()
    var data=data1
    return new Promise((resolve,reject)=>{
        var xdr=new XMLHttpRequest()
        xdr.timeout=timeout
        var param=[]
        for(let key in data){
            param.push(key+'='+data[key])
        }
        console.log(data)
        var paramstr=param.join('&')
        if(method=='get'){
            url+=paramstr
        }
        xdr.open(method,url)
        var data=null
        if(method=='post'){
            xdr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            data=str
        }
        console.log(data)
        xdr.send(data)
        xdr.onreadystatechange=function(){
            if(xdr.readyState==4&&((xdr.status>=200&&xdr.status<300)||xdr.status==304)){
                resolve('success'+xdr.responseText)
            }else{
                reject('error'+xdr.status,xdr.responseText,1)
            }
        }
    })
}
myajax('https://netease-cloud-music-api-crete722p-hannah-bingo.vercel.app/artist/top/song','get',{id:6452},'10000').then((value)=>{
    console.log(value)
},(err)=>{console.log(err)
})