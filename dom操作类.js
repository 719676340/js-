var node=document.querySelector('.out')
node=document.documentElement
node.onclick=function(){
    console.log('111111')
}
var newidv=document.createElement('input')
node.appendChild(newidv)
console.log(document.URL)
// document.write("<script type=\"text/javascript\" src=\"proxy.js\"><\/script>")
node=document.getElementsByClassName('box')
console.log(node[0].getBoundingClientRect().top,window.innerHeight)