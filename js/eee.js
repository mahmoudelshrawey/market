let ygnkgh = localStorage.getItem("qwawww")
let hbj = JSON.parse(ygnkgh)
let ehb = document.querySelector(".productsr")
console.log(hbj);
function gggg(){
let tv = []
    hbj.forEach(x => {
        if (x.me == true) {
            tv.push(`<div class="pro_item pro_item${x.id}"onload="${eeeee(x.me,x.id)}"><div class="yty" ><img src='${x.ig}' alt="chair1"></div>
            <div class="pro_item_d">
                <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
                <p>${x.p} </p>
                <span > size :${x.size}</span>
                ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d1(${x.id})">remove from me</button>`:""}
                ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d(${x.id})">edite the pro</button>`:""}
            </div>
            <div class="pro_item_a">
                <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
                <i class="fa fa-heart-o fff${x.id} "id="qad" onclick="aqqdd(${x.id})"></i>
            </div>
        </div>`)
        }
    });
    if(ehb&&tv.length >0){
        ehb.innerHTML =tv.join("")
    }else{
        ehb.innerHTML =`it is not an item`
    }
}
gggg()
function aadd222d1(x) {
    let oo1 = localStorage.getItem("qwawww")
    let oo = JSON.parse(oo1)
    let u =oo.filter((o)=>o.id!=x)
    console.log(u);
    let fh = JSON.stringify(u)
    localStorage.setItem("qwawww",fh)
    let oppp=[]
    u.forEach( (x) =>{if (x.me == true) {
        oppp.push(`<div class="pro_item pro_item${x.id}"onload="${eeeee(x.me,x.id)}"><div class="yty" ><img src='${x.ig}' alt="chair1"></div>
        <div class="pro_item_d">
            <h2><a href="yy.html" class="q1q1q1" onclick="aad(${x.id})">${x.name}</a></h2>
            <p>${x.p} </p>
            <span > size :${x.size}</span>
            ${x.me ==true?`<button class="add_to_cart1"onclick="aadd222d1(${x.id})">remove from me</button>`:""}
            ${x.me ==true?`<button class="add_to_cart1"onclick="aadd22d1(${x.id})">edite the pro</button>`:""}
        </div>
        <div class="pro_item_a">
            <button class="add_to_cart" onclick="aaddd(${x.id})">add to cart</button>
            <i class="fa fa-heart-o fff${x.id} "id="qad" onclick="aqqdd(${x.id})"></i>
        </div>
    </div>` )}})
    if(ehb&&oppp.length >0){
        ehb.innerHTML =oppp.join("")
    }else{
        ehb.innerHTML =`it is not an item`
    }
}
function aadd22d1(x) {
    let oo1 = localStorage.getItem("qwawww")
    let oo = JSON.parse(oo1)
    let u1 = oo.find((o)=>o.id==x)
    let u = JSON.stringify(u1)
    localStorage.setItem("n",u)
    window.location="pro.html"
}