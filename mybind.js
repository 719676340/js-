Function.prototype.bindmy=function(obj,...arg){
    return (...rest)=>this.call(obj,...arg,...rest)
}
function f(arg) {
    console.log(this.a, arg);
}

  // output: 3, 4
f.bindmy({ a: 3 })(4);