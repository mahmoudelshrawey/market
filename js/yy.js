let s= document.querySelector('.mahm')
let qq = localStorage.getItem("pro")
let quq = localStorage.getItem("cart2")
let x2 = JSON.parse(quq)
let x = JSON.parse(qq)

let ijji = x2.find((i)=>i.id ==x.id)
let hqwerty 
if(ijji){
    hqwerty = ijji.qy 
}
s.innerHTML =`<div class="pro_item"><div class="yty"><img src='${x.ig}' alt="chair1"></div>
<div class="pro_item_d">
    <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
    <p>${x.p} </p>
    <span> size :${x.size}</span></br>
    <span class="qasfdefhy">quantity :${hqwerty||0}</span>
</div>
<div class="pro_item_a">
    <button class="add_to_cart" onclick="aaddd(${x.id})" >add to cart</button>
    <i class="fa fa-heart-o fff${x.id}" onclick="aq2qdd()"></i>
</div>
</div>`
let add_to_cartww =document.querySelector('.add_to_cart')
add_to_cartww.addEventListener("click",function qaqaqaqqqa(){
    let s= document.querySelector('.qasfdefhy')
    let qq = localStorage.getItem("pro")
    let quq = localStorage.getItem("cart2")
    let x2 = JSON.parse(quq)
    let x = JSON.parse(qq)
    console.log("yymkm");

    let ijji = x2.find((i)=>i.id ==x.id)
s.innerHTML =`quantity :${ijji.qy}`
})

let hfwwqqq =[]
let qnjgjdi=[]
let hfkjbdjfh882 = localStorage.getItem('fav')
let qtakgriogtw = JSON.parse(hfkjbdjfh882)
console.log(qtakgriogtw);
function  aq2qdd(id){
    let jj = hfwwqqq.find((rr)=>ijji.id==rr.id )

    console.log(jj);
    if (jj) {
        for (let i = 0; i < hfwwqqq.length; i++) {
            if (hfwwqqq[i].id==jj.id) {
                let wes=document.querySelector(`.fff${hfwwqqq[i].id}`)
                wes.classList.remove("qsqsrtyuu")
            }else{
                qnjgjdi.push(hfwwqqq[i])
            }
        }
        hfwwqqq=[...qnjgjdi]
        qnjgjdi=[]
        localStorage.setItem("fav",JSON.stringify(hfwwqqq))
    }else{
        hfwwqqq.push(ijji)
        console.log(h);
        localStorage.setItem("fav",JSON.stringify(hfwwqqq))
        for (let i = 0; i < hfwwqqq.length; i++) {
            
            let g = i
            
            let wes=document.querySelector(`.fff${hfwwqqq[g].id}`)
            console.log(wes);
            wes.classList.add("qsqsrtyuu")
        }
    }
}

hfwwqqq=qtakgriogtw?[...qtakgriogtw]:[]
console.log(hfwwqqq);
for (let i = 0; i < hfwwqqq.length; i++) {
    let g = i
    console.log(hfwwqqq);
    let wes=document.querySelector(`.fff${hfwwqqq[g].id}`)
    if (wes) {
        console.log(wes);
        wes.classList.add("qsqsrtyuu")
    }

}