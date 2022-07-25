let date=new Date()
let new_date=new Date(date+7*24*60*60*1000)
document.cookie='name=HQJ;'+'expires='+new_date.toUTCString()

document.cookie='name=HQJ;'+'expires='+date.toUTCString()
localStorage.setItem('name','hqj')
sessionStorage.removeItem('name')