let qwe1wss =document.querySelector('.products55')
let fhb = localStorage.getItem('fav')
let ndkfjwsf =JSON.parse(fhb)
let ydhcbs1 = localStorage.getItem("cart2")
let ydhcbs = JSON.parse(ydhcbs1)
let hfq123suhdxudu

function knmrfk(x){
    if(ndkfjwsf.length ==0){
        qwe1wss.innerHTML=`it is not fav`
    }else{
    let frko = x.map((x)=>`<div class="pro_item"><div class="yty"><img src='${x.ig}' alt="chair1"></div>
    <div class="pro_item_d">
        <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
        <p>${x.p} </p>
        <span> size :${x.size}</span></br>
        <span class="rebrjehbrhjbiurebr${x.id} idi">quantity :${dbyu(x.id) ||0}</span>
    </div>
    <div class="pro_item_a">
        <button class="add_to_cart" onclick="fgbnjh(${x.id})" >add to cart</button>
        <i class="fa fa-heart-o fff qsqsrtyuu" onclick="aarrrrd(${x.id})"></i>
    </div>
    </div>`)
    qwe1wss.innerHTML=frko.join('')
    }
    
}
knmrfk(ndkfjwsf)

function fgbnjh(i) {
    aaddd(i)
    aadddurh(i)
}
function aadddurh(id) {
    let gjkn = document.querySelector(`.rebrjehbrhjbiurebr${id}`)
    let ydhcbs1 = localStorage.getItem("cart2")
    let ydhcbs = JSON.parse(ydhcbs1)
    let ug = ydhcbs.find((i)=>i.id ==id)
    gjkn.innerHTML=`quantity :${ug.qy}`
}
function dbyu(id) {
    let ydhcbs1 = localStorage.getItem("cart2")
    let ydhcbs = JSON.parse(ydhcbs1)
    if(ydhcbs){
        let ug = ydhcbs.find((i)=>i.id ==id)
        if (ug) {
            return ug.qy
        }
    }
}
function aarrrrd(id){
    let fhd = ndkfjwsf.filter((tt)=>tt.id!==id)
    localStorage.setItem('fav',JSON.stringify( fhd))
    let fhb = localStorage.getItem('fav')
    let ndkfjwsf1 =JSON.parse(fhb)
    knmrfk(ndkfjwsf1)
    ndkfjwsf=[...ndkfjwsf1]
}