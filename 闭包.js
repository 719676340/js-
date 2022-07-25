function id(){
    var id=0
    return function(){
        console.log(id++)
    }
}
let x=id()
var a=x()
var b=x()
x()

