function render(vnode,container){
    if(typeof container !=='object'){
        container=document.querySelector(container)
    }
    console.log(container)
    container.appendChild(_render(vnode))
}
function _render(vnode){
    if(typeof vnode !=='object'){
        return document.createTextNode(vnode)
    }else{
        let dom=document.createElement(vnode.tag)
        if(vnode.attrs){
            for(let key in vnode.attrs){
                dom.setAttribute(key,vnode.attrs[key])
            }
        }
        if(vnode.children){
            if(typeof vnode.children =='object'){
                vnode.children.forEach(child => {
                    render(child, dom)
                })
            }else{
                render(vnode.children, dom)
            }
        }
        return dom
    }
    
}
let obj = {
    tag: 'div',
    attrs: {
      class: 'title'
    },
    children: [
      {
        tag: 'h1',
        attrs: {
          class: 'h1',
        },
        children: '我是h1标签'
      }, {
        tag: 'h4',
        attrs: {
          class: 'h4'
        },
        children: '我是h4标签'
      }
    ]
  }

render(obj, '#app')