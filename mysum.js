function mysum(...args){
    const f=(...rest)=>mysum(...args,...rest);
    f.valueOf=()=>args.reduce((a,b)=>a+b,0);
    return f
}
console.log(mysum(1, 2, 3).valueOf())
function sum(...args) {
    const f = (...rest) => sum(...args, ...rest);
    f.valueOf = () => args.reduce((x, y) => x + y, 0);
    return f;
  }

