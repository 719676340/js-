function ajax(url,method,data,timeout,success,error){
    var method=(method||'get').toLowerCase()
    var xdr=new XMLHttpRequest()
    xdr.timeout=timeout
    xdr.onreadystatechange=function(){
        if(xdr.readyState==4&&((xdr.status>=200&&xdr.status<300)||xdr.status==304)){
            success('success'+xdr.responseText)
        }else{
            error('error'+xdr.status)
        }
    }
    var param=[]
    for(let i in data){
        param.push(i+'='+data[i])
    }
    var str=param.join('&')
    if(method=='get'){
        url+='?'+str
    }
    // console.log(method,url)
    xdr.open(method,url)
    var data=null
    if(method=='post'){
        xdr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        data=str
    }
    xdr.send(data)
}
function help(a){
    console.log(a)
}
ajax('https://netease-cloud-music-api-crete722p-hannah-bingo.vercel.app/artist/top/song','get',{id:6452},'10000',help,help)