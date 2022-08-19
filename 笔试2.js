function help(str){
    var str=str.split(' ')
    var sign=[]
    var num=[]
    var numcount=[]
    for(let i=0;i<str.length;i++){
        if(str[i][0]=='('){
            sign.push(str[i].slice(1))
            numcount.push(0)
        }else if(str[i][str[i].length-1]==')'){
            if(str[i].length>1){
                num.push(Number(str[i].slice(0,str[i].indexOf(')'))))
                numcount[numcount.length-1]++
            }
            var tempsign=str[i].slice(str[i].indexOf(')')).split('')
            while(tempsign.length){
                tempsign.pop()
                var temp=sign.pop()
                var temparr=num.splice(num.length-numcount[numcount.length-1])
                var value=temparr.shift()
                while(temparr.length>0){
                    numcount[numcount.length-1]--
                    if(temp=='+'){
                        value+=temparr.shift()
                    }
                    if(temp=='-'){
                        value-=temparr.shift()
                    }
                    if(temp=='*'){
                        value*=temparr.shift()
                    }
                }
                numcount.pop()
                numcount[numcount.length-1]++
                num.push(value)
            }
        }else{
            num.push(Number(str[i]))
            numcount[numcount.length-1]++
        }
    }
    return num[0]
}
var str=['(* (- (* (+ 2 3) 5) 9 1) 2)','(+ (* (- 300 (- 90 12 3) 1 2 3) 12 2) 1)','(- 890 18 23 (* 1 2 3 (+ 1288 32)))']
for(let i=0;i<str.length;i++){
    console.log(help(str[i]))
}
