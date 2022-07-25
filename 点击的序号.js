var divs=document.getElementsByTagName('div')
for(let i=0;i<divs.length;i++){
    divs[i].onclick=()=>{
        console.log(i)
    }
}
console.log(divs.length)