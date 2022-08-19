// function foo(){
//     let _this=this
//     setTimeout(() => {
//         console.log(this,this.id,'ES6')
//     }, 0);
//     setTimeout(function(){
//         console.log(this,this.id)
//     },0)
// }
// var id=21
// foo.call({
//     id:22
// })
// function help(){
//     console.log(this,this.id,22222)
// }
// const object={
//     id:2222
// }
// help()
// 1默认类的
// 1.1非严格模式
// var foo=234
// function help(){
//     this.foo=123
//     console.log(this,foo)
// }
// help()
// 1.2 let const var    let和const不会挂载在window上
// 1.3 对象内执行
// a=1
// function foo(){
//     console.log(this,this.a)
// }
// const obj={
//     a:10,
//     bar(){
//         foo()  //这个this是在window那层执行的 
//     }
// }
// obj.bar()
// 1.4函数内执行
// var a=1
// function outer(){
//     var a=2
//     function inner(){
//         console.log(this,this.a)
//     }
//     inner()
// }
// outer()
// 1.5自执行
// a=1;
// (function(){
//     console.log(this,this.a)
// }())
// function bar(){
//     b=2;    //imply global  没有var的话就会挂载window上面 
//     (function(){
//         console.log(this,this.b)
//     }())
// }
// bar()
// 2.隐式绑定类的
// 函数的调用时在某个对象的上下文上触发的 xxx.func()
// 2.1
// var a=1
// function foo(){
//     console.log(this,this.a)
// }
// var obj={
//     a:2,
//     foo
// }
// foo()
// obj.foo()
// this永远指向队友调用它的对象
// 2.2链式调用
// var obj1={
//     a:1,
//     obj2:{
//         a:2,
//         foo(){
//             console.log(this.a)
//         }
//     }
// }
// obj1.obj2.foo()
// 隐式绑定的丢失
// 1.去函数别名 2把函数作为参数传递
// 1
// a=0
// var obj1={
//     a:1,
//     obj2:{
//         a:2,
//         foo(){
//             console.log(this,this.a)
//         }
//     }
// }
// var outfoo=obj1.obj2.foo
// obj1.obj2.foo()
// outfoo()

// var obj3={
//     a:3,
//     foo:obj1.obj2.foo
// }
// obj3.foo()
// var foo=function(){
//     console.log(this,this.a)
// }
// var a=0
// var obj={
//     a:1,
//     foo
// }
// var obj2={
//     a:3,
//     dfoo   
// }
// foo()
// obj.foo()
// function dfoo(fn){
//     console.log(this,this.a)
//     fn()
// }
// obj2.dfoo(obj.foo)

// var obj = { 
//     a: 1, 
//     foo() {
//         console.log(this.a)
//     } 
// };
// var a = 2;
// var foo = obj.foo;
// var obj2 = { a: 3, foo: obj.foo }
 
// obj.foo();
// foo();
// obj2.foo();

// function foo() {
//     console.log(this.a)
//   }
//   function doFoo(fn) {
//     console.log(this)
//     fn()
//   }
//   var obj = { a: 1, foo }
//   var a = 2
//   var obj2 = { a: 3, doFoo }
//   obj2.doFoo(obj.foo)



// var name='aaaaa'
// function intro(){
//     console.log(this,this.name)
// }
// const obj1={
//     name:'bbbbb',
//     intro:function(){
//         // var _this=this
//         setTimeout(()=>{   //如果这里用的是箭头函数 就会固定settimeout的上面那一层 也就是intro同层的this
//             console.log(this,this.name)
//         })
//     }
// }
// const obj2={
//     name:'cccc',
//     intro    
// }
// obj1.intro()
// setTimeout(obj2.intro,100)
// setTimeout(function(){
//     obj2.intro()
// },100)

// 综合题
// id='js'
// let obj={
//     id:'obj',
//     a(){
//         this.id+='this';
//         console.log(this,this.id)
//     },
//     b(fn){
//         this.id+='this';
//         console.log(this,this.id,'bbbbb')
//         fn()
//     },
//     c(){
//         console.log(this,this.id)
//         setTimeout(function(){
//             console.log(this,this.id)
//         })
//     },
// }
// obj.a()
// let a=obj.a
// a()
// obj.c()
// console.log(id,111)

// name = 'javascript' ;
// let obj = {
//     name: 'obj',
//     A (){
//         this.name += 'this';
//         console.log(this.name)
//     },
//     B(f){
//         this.name += 'this';
//         f();
//     },
//     C(){
//       setTimeout(function(){
//           console.log(this.name);
//       },1000);
//     }
// }
// let a = obj.A;             
// a();                        
// obj.B(function(){           
//     console.log(this.name); 
// });                         
// obj.C();                    
// console.log(name);   







// function help(){
//     console.log(this,this.id)
// }
// obj.b(help)
// obj.c()
// console.log(id)
// 4显示绑定类  call  apply数组  bind返回函数 
// 隐式绑定的丢失

// function help(){
//     console.log(this,this.a)
// }
// function dofn(fn){
//     console.log(this,this.a)
//     fn()
// }
// a=2
// var obj={
//     a:1,
//     help
// }
// // dofn(help)
// dofn.call(obj,help)

//4.1call的位置
// function foo(){
//     console.log(this,this.a)
// }
// var obj={
//     a:1
// }
// var a=2
// foo()
// foo.call(obj)
// foo().call(obj)
//4.2内外层的this
// function foo(){
//     console.log(this,this.a)
//     return function(){
//         console.log(this,this.a)
//     }
// }
// var obj={a:1}
// var a=2
// foo.call(obj)()
//4.3对象的this
// var obj={
//     a:'obj',
//     foo:function(){
//         console.log(1,this,this.a)
//         return function(){
//             console.log(2,this,this.a)
//         }
//     }
// }
// var a='window'
// var obj2={
//     a:'obj2'
// }
// obj.foo()()
// obj.foo.call(obj2)()
// obj.foo().call(obj2)

// 7.箭头函数
// 箭头函数的this的在定义的时候就是固定的 外层的this。
// a=1
// var obj={
//     a:2,
//     intro:()=>{
//         console.log(this,this.a)
//     }
// }
// obj.intro()
// 7.1new和箭头函数 
// function user(name,age){
//     this.name=name
//     this.age=age
//     this.intro=function(){
//         console.log(this,this.name)
//     }
//     this.myage=()=>{
//         console.log(this,this.age)   //这个有点出乎意料是真的  估计是User又指给的user的实例
//     }
// }
// var user=new user('1111',12)
// var name='2222'
// var age=13
// user.intro()
// user.myage()
// 7.2 call和箭头函数
// var name='window'
// var obj1={
//     name:'obj1',
//     intro:function(){
//         console.log(this,this.name)
//         return ()=>{
//             console.log(this,this.name)
//         }
//     },
//     intro2:()=>{
//         console.log(this,this.name)
//         return function(){
//             console.log(this,this.name)
//         }
//     }
// }
// var obj2={
//     name:'obj2'
// }
// obj1.intro.call(obj2)()
// obj1.intro().call(obj2)
// obj1.intro2.call(obj2)()
// obj1.intro2().call(obj2)