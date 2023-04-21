let uname = document.querySelector('.idjgj')
let password =document.querySelector('.clqass1')
let bu =document.querySelector('.p')
bu.addEventListener("click",(e)=>{
    e.preventDefault()
    let h = localStorage.getItem("name")
    let j = localStorage.getItem("password")
    console.log(h);
    console.log(j);
    if(uname.value==""||password.value==""||h.length<=0||j.length<=0){
        alert("you have to write al unfromshin")
    }else if(h&&uname.value.trim() ==h &&j&&password.value.trim() ==j){
        localStorage.setItem("a","true")
        setTimeout(() => {
            window.location ="html.html"
        }, 1000);
        
    }
})