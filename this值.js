window.data=5
var foo={
    data:6,
    cilck:function(){
        console.log(this.data)
    }
}
foo.cilck()
var bar=foo.cilck
bar()