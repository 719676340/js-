var nodelist=document.getElementById('root').getElementsByTagName('li')
var left=0
var right=nodelist.length-1
while(left<right){
    var temp=nodelist[left].textContent
    nodelist[left].textContent=nodelist[right].textContent
    nodelist[right].textContent=temp
    left++
    right--
}