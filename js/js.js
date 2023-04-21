
let uname = document.querySelector('.idjgj')
let email =document.querySelector('.q')
let password =document.querySelector('.clqass1')
let bu =document.querySelector('.p')
bu.addEventListener("click",(e)=>{
    e.preventDefault()
    let ooo =email.value
    let kkk = /.+@gmail\.(com)/
    if(uname.value==""||email.value == ""||password.value==""||(kkk.test(ooo)) ==false){
        alert("you have to write al unfromshin")
    }else{
        localStorage.setItem('name',uname.value)
        localStorage.setItem('email',email.value)
        localStorage.setItem('password',password.value)
        uname.value=""
        email.value=""
        password.value=""
        setTimeout(() => {
            window.location ="lodin.html"
        }, 1000);
    }
})
