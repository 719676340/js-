// var node=document.querySelector('.out')
// node=document.documentElement
// node.onclick=function(){
//     console.log('111111')
// }
// var newidv=document.createElement('input')
// node.appendChild(newidv)
// console.log(document.URL)
// // document.write("<script type=\"text/javascript\" src=\"proxy.js\"><\/script>")
// node=document.getElementsByClassName('box')
// console.log(node[0].getBoundingClientRect().top,window.innerHeight)
var html=document.documentElement
console.log(html)
var newidv=document.createElement('input')
newidv.onchange=function(e){
    console.log(newidv.value)
}
html.appendChild(newidv)
var botton=document.createElement('button')
var text=document.createTextNode('按钮')
botton.appendChild(text)
botton.addEventListener('click',function(){
    
    console.log(newidv.value)
})
html.appendChild(botton)
console.log(html)
