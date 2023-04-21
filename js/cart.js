let rijirfjirf = localStorage.getItem("cart2")
let fh =document.querySelector('.products55')
let uuuww = []
if(rijirfjirf){
    let o =JSON.parse(rijirfjirf)
    mahmut222(o)
}
let oo =[]
function remove(id) {
    let o =JSON.parse(rijirfjirf)
    let r= o.map((i)=> {if(i.id !=id){return i}} )
    for (let index = 0; index < r.length; index++) {
        let j =r[index]
        if(typeof j=="object"){
            oo.push(r[index])
        }
    }
    localStorage.removeItem("cart2")
    localStorage.setItem("cart2",JSON.stringify(oo))
    rijirfjirf = localStorage.getItem("cart2")
    if(rijirfjirf){
        let o =JSON.parse(rijirfjirf)
        mahmut222(o)
        ii(o)
    }
    oo.length =0
    ookg() 
}
function mahmut222(m) {
    uuuww.length =0
    m.forEach(x => {
        uuuww.push(`<div class="pro_item"><div class="yty"><img src='${x.ig}' alt="chair1"></div>
        <div class="pro_item_d">
            <h2>${x.name} </h2>
            <p>${x.p} </p>
            <span> size :${x.size}</span></br>
            <span>quantity :${x.qy}</span>
        </div>
        <div class="pro_item_a">
            <button class="add_to_cart" onclick="remove(${x.id})">remove from cart</button>
            <i class="fa fa-heart-o fff${x.id}" onclick="aqqdd(${x.id})"></i>
        </div>
    </div>`)
    });
    fh.innerHTML = uuuww.join('')
    ookg() 
}
let qzaq12 =localStorage.getItem("qwawww")
let qtagtw1 = JSON.parse(qzaq12)
let hfqqq1 =[]
let qnjgdi1=[]
let hjggfd2 = localStorage.getItem('fav')
let qtakggtw22 = JSON.parse(hjggfd2)


function  aqqdd(id){
    let fff =qtagtw1.find((ido)=>ido.id ==id)
    let jj = hfqqq1.find((rr)=>rr.id ==fff.id)
    if (jj) {
        for (let i = 0; i < hfqqq1.length; i++) {
            if (hfqqq1[i].id==jj.id) {
                let wes=document.querySelector(`.fff${hfqqq1[i].id}`)
                wes.classList.remove("qsqsrtyuu")
            }else{
                qnjgdi1.push(hfqqq1[i])
            }
        }
        hfqqq1=[...qnjgdi1]
        qnjgdi1=[]
        localStorage.setItem("fav",JSON.stringify(hfqqq1))
    }else{
        hfqqq1=[...hfqqq1,fff]
        localStorage.setItem("fav",JSON.stringify(hfqqq1))
        for (let i = 0; i < hfqqq1.length; i++) {
            console.log(hfqqq1[i].id);
            let g = i
            
            let wes=document.querySelector(`.fff${hfqqq1[g].id}`)
            console.log(wes);
            wes.classList.add("qsqsrtyuu")
        }
    }
}
hfqqq1=qtakggtw22?[...qtakggtw22]:[]
console.log(hfqqq1);
for (let i = 0; i < hfqqq1.length; i++) {
    console.log(hfqqq1[i].id);
    let g = i
    
    let wes=document.querySelector(`.fff${hfqqq1[g].id}`)
    if (wes) {
        console.log(wes);
        wes.classList.add("qsqsrtyuu")
    }

}
function ii(o) {
    let yiii =document.querySelector('.cart-name')
    yiii.innerHTML =""
    for (let index = 0; index < o.length; index++) {
        yiii.innerHTML += `<p>${o[index].name}</p>`
    }
    let mahmutdj = document.querySelector(".mahmut2")
    let ouu = document.querySelectorAll(".cart-name p")
    mahmutdj.innerHTML=ouu.length
}
function ookg() {
    let h222 =document.querySelectorAll(".pro_item")
    if (h222.length ==0) {
        fh.innerHTML = `<div class="pro_item"> <h1>it is not  an item at the cart</h1></div>`
    }
}
