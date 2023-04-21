let user = document.querySelector("#person")
let li_user= document.querySelector("#user")
let link = document.querySelector("#links")
let hop = localStorage.getItem("name")
let jl = localStorage.getItem("password")
let jlo = localStorage.getItem("a")
let ooyy =document.querySelector('#logout')
console.log(jlo);
if (jlo =="true") {
    link.remove()
    user.style.cssText ="display:flex"
    li_user.innerHTML =hop
} 
ooyy.addEventListener("click",()=>{
    localStorage.clear()
    setTimeout(() => {
        window.location="reggidter.html"
    }, 1500);
})
let kk =document.querySelector(".products")
let yy222222y =[
    {
        id:1,
        size:"large",
        ig:"im/chair1.jpg",
        name:"chair1 item",
        p:"it is the best chair i will ever have",
        qy:1,
        me:false
    },
    {
        id:2,
        size:"large",
        ig:"im/chair2.jpg",
        name:"chair2 item",
        p:"it is the best chair i will ever have",
        qy:1,
        me:false
    },
    {   
        id:3,
        size:"large",
        ig:"im/chair3.jpg",
        name:"chair3 item",
        p:"it is the best chair i will ever have",
        qy:1,
        me:false
    },
    {   
        id:4,
        size:"large",
        ig:"im/chair4.jpg",
        name:"chair4 item",
        p:"it is the best chair i will ever have",
        qy:1,
        me:false
    },
]
localStorage.setItem("qwawww",localStorage.getItem("qwawww")||JSON.stringify(yy222222y))
let eee=localStorage.getItem("qwawww")
let o = JSON.parse(eee)
let oppp=[]
o.forEach( (x) =>{
    oppp.push(`<div class="pro_item pro_item${x.id}"onload="${eeeee(x.me,x.id)}"><div class="yty" ><img src='${x.ig}' alt="chair1"></div>
    <div class="pro_item_d">
        <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
        <p>${x.p} </p>
        <span > size :${x.size}</span>
        ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d(${x.id})">remove from me</button>`:""}
        ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d(${x.id})">edite the pro</button>`:""}
    </div>
    <div class="pro_item_a">
        <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
        <i class="fa fa-heart-o fff${x.id} "id="qad" onclick="aqqdd(${x.id})"></i>
    </div>
</div>` )
})
let qzaq =localStorage.getItem("qwawww")
let qtagtw = JSON.parse(qzaq)
let hfqqq =[]
let qnjgdi=[]
let hjggfd = localStorage.getItem('fav')
let qtakggtw = JSON.parse(hjggfd)

function  aqqdd(id){
    qzaq =localStorage.getItem("qwawww")
    qtagtw = JSON.parse(qzaq)
    let fff =qtagtw.find((ido)=>ido.id ==id)
    let jj = hfqqq.find((rr)=>rr.id ==fff.id)
    if (jj) {
        for (let i = 0; i < hfqqq.length; i++) {
            if (hfqqq[i].id==jj.id) {
                let wes=document.querySelector(`.fff${hfqqq[i].id}`)
                wes.classList.remove("qsqsrtyuu")
            }else{
                qnjgdi.push(hfqqq[i])
            }
        }
        hfqqq=[...qnjgdi]
        qnjgdi=[]
        localStorage.setItem("fav",JSON.stringify(hfqqq))
    }else{
        hfqqq=[...hfqqq,fff]
        localStorage.removeItem("fav")
        let ed = JSON.stringify(hfqqq)
        if (ed) {
            localStorage.setItem("fav",ed)
        }
        for (let i = 0; i < hfqqq.length; i++) {
            console.log(hfqqq[i].id);
            let g = i
            setTimeout(() => {
                let wes=document.querySelector(`.fff${hfqqq[g].id}`)
                console.log(wes);
                wes.classList.add("qsqsrtyuu")
            }, 1);
        }
    }
}
hfqqq=qtakggtw?[...qtakggtw]:[]






let h = document.querySelector("#person li i")
let mahmut = document.querySelector(".mahmut1")
let mahmut1 = document.querySelector(".mahmut2")

let uooo=[]
let y =document.querySelector('.cart-name')
if (localStorage.getItem("cart2")) {
    uooo = [...JSON.parse(localStorage.getItem("cart2"))]
}
for (let i = 0; i < uooo.length; i++) {
    y.innerHTML += `<p >${uooo[i].name}  ${uooo[i].qy}</p>`
    
}
let ouu = document.querySelectorAll(".cart-name p")
mahmut1.innerHTML=ouu.length ||0
//let fheyhjw =[]
function aaddd(u){
    let ui = o.find((p)=>p.id==u)
    // uooo =[...uooo,ui]
    let  tt = uooo.find((i)=>i.id ==ui.id )
    for (let i = 0; i < uooo.length; i++) {
        if (uooo[i].id ==ui.id &&tt) {
            uooo[i].qy+=1
                
            } 
        
    }

    if(tt){
            
    }else{
        uooo =[...uooo,ui]
    }
    setTimeout(() => {
        console.log(ui);
        let fhb = JSON.stringify(uooo)
        localStorage.removeItem("cart2")
        localStorage.setItem("cart2",fhb)
        let oo =localStorage.getItem("cart2")
        let ujjnjf = JSON.parse(oo)
        y.innerHTML =""
        for (let index = 0; index < ujjnjf.length; index++)  y.innerHTML += `<p >${ujjnjf[index].name} ${ujjnjf[index].qy}</p>`
        let ouu = document.querySelectorAll(".cart-name p")
        mahmut1.innerHTML=ouu.length
    }, 1);

  //  let fjuhriuebeiuhgier =[]
 /*   for (let i = 0; i < ujjnjf.length; i++) {
        let j =fjuhriuebeiuhgier.filter( (nj)=> nj.id ==ujjnjf[i].id)
        console.log(ujjnjf[i].id);
        if(j.length ==0){
            console.log("ghb");
            fjuhriuebeiuhgier.push(ujjnjf[i])
        }
    }
    for (let i = 0; i < fjuhriuebeiuhgier.length; i++) {
        let j =ujjnjf.filter( (nj)=> nj.id ==fjuhriuebeiuhgier[i].id)
        y.innerHTML += `<p >${ujjnjf[i].name}  ${j.length}</p>`
        
    }*/

}

let j = document.querySelectorAll(".add_to_cart")
j.forEach((j)=>{
    j.addEventListener("click",()=>{
        if( hop ?hop.length >0 :false){
            console.log("mjngj");
        }else{
            window.location ="lodin.html"
        }
    })
})
let jn =document.querySelector('.cart')

h.addEventListener("click",()=>{
    let hhh12345= document.querySelectorAll(".cart-name p")
    if (hhh12345.length !=0) {
        jn.classList.toggle("cart1")
    } else{
        if(jn.classList.contains("cart1")){
            jn.classList.toggle("cart1")
        }
    }
})
function km (){
    if(kk){
        kk.innerHTML=oppp.join('')
    } 
}
km()
function aad(w){
    let d= o.find((o)=>o.id ==w)
    localStorage.setItem("pro",JSON.stringify(d))
}
let juqwerty =document.querySelector('.search')
if (juqwerty) {
    juqwerty.addEventListener("keyup",function(e){
        if(e.keyCode ===13){
            shearch(e.target.value, o)
        }
    if (e.target.value.trim() =="") {
        km()
        for (let i = 0; i < hfqqq.length; i++) {
            console.log(hfqqq[i].id);
            let g = i
            
            let wes=document.querySelector(`.fff${hfqqq[g].id}`)
            console.log(wes);
            wes.classList.add("qsqsrtyuu")
        }
    }
    })
}


function shearch(title, myarrey){
    let  ww = myarrey.filter((i) =>i.name.indexOf(title)!==-1)
    let uu123 =[]
    console.log(title);
    console.log(myarrey);
    if (title) {
        ww.forEach( (x) =>{
            uu123.push(`<div class="pro_item"><div class="yty"><img src='${x.ig}' alt="chair1"></div>
            <div class="pro_item_d">
                <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
                <p>${x.p} </p>
                <span> size :${x.size}</span>
                ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d(${x.id})">remove from me</button>`:""}
                ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d(${x.id})">edite the pro</button>`:""}
            </div>
            <div class="pro_item_a">
                <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
                <i class="fa fa-heart-o fff${x.id}" onclick="aqqdd(${x.id})"></i>
            </div>
        </div>` )
        })
        kk.innerHTML=uu123.join('')
        for (let i = 0; i < hfqqq.length; i++) {
            console.log(hfqqq[i].id);
            let g = i
            
            let wes=document.querySelector(`.fff${hfqqq[g].id}`)
            console.log(wes);
            wes.classList.add("qsqsrtyuu")
        }
    }else{
        km()
    }
}

if (hfqqq) {
    for (let i = 0; i < hfqqq.length; i++) {
        console.log(hfqqq[i].id);
        let g = i
        
        let wes=document.querySelector(`.fff${hfqqq[g].id}`)
        if (wes) {
            wes.classList.add("qsqsrtyuu")
        }
        
    }
}
let search_by_size =document.getElementById("select_by_size")
if(search_by_size){
search_by_size.addEventListener("change",(o)=>{
    let hf =o.target.value
    let bf =localStorage.getItem("qwawww")
    let u = JSON.parse(bf)
    let jf =""
    jf =[]
    u.forEach((u1)=>{
        if(u1.size ==hf){
            jf.push(u1)
        }
    })
    console.log(hf);
    if (hf =="all") {
        km()
    } else {
        let nfj =""
        nfj =[]
        jf.forEach((x)=> {
            nfj.push(`<div class="pro_item"><div class="yty"><img src='${x.ig}' alt="chair1"></div>
    <div class="pro_item_d">
        <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
        <p>${x.p} </p>
        <span> size :${x.size}</span>
        ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d(${x.id})">remove from me</button>`:""}
        ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d(${x.id})">edite the pro</button>`:""}
    </div>
    <div class="pro_item_a">
        <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
        <i class="fa fa-heart-o fff${x.id} "id="qad" onclick="aqqdd(${x.id})"></i>
    </div>
</div>`  )

        })
        if(kk){
            kk.innerHTML=nfj.join('')
        }
    }

})
}
function eeeee(x,y){
        if (x==true) {
            setTimeout(() => {
                let f =`.pro_item${y}`
                let ein = document.querySelector(f)
                if (ein) {
                    ein.classList.add("ryhfvy")
                }
            }, 1);
        }

}
function aadd222d(x) {
    let oo1 = localStorage.getItem("qwawww")
    let oo = JSON.parse(oo1)
    let u =oo.filter((o)=>o.id!=x)
    console.log(u);
    let fh = JSON.stringify(u)
    localStorage.setItem("qwawww",fh)
    let oppp=[]
    u.forEach( (x) =>{
        oppp.push(`<div class="pro_item pro_item${x.id}"onload="${eeeee(x.me,x.id)}"><div class="yty" ><img src='${x.ig}' alt="chair1"></div>
        <div class="pro_item_d">
            <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
            <p>${x.p} </p>
            <span > size :${x.size}</span>
            ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d(${x.id})">remove from me</button>`:""}
            ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d(${x.id})">edite the pro</button>`:""}
        </div>
        <div class="pro_item_a">
            <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
            <i class="fa fa-heart-o fff${x.id} "id="qad" onclick="aqqdd(${x.id})"></i>
        </div>
    </div>` )})
    if(oppp){
        kk.innerHTML=oppp.join('')
    }
}
function aadd22d(x) {
    let oo1 = localStorage.getItem("qwawww")
    let oo = JSON.parse(oo1)
    let u1 = oo.find((o)=>o.id==x)
    let u = JSON.stringify(u1)
    localStorage.setItem("n",u)
    window.location="pro.html"
}