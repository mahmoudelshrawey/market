let itemCr =document.querySelector('#cre_item')
let bbbbbbhj=document.getElementById("upload")
bbbbbbhj.addEventListener("change",upload)
let le_t
function ugikk() {
    let itemNAME =   document.querySelector('#item_name_1')
    let itemSize = document.querySelector('#size')
    let itemeDc =document.querySelector('#item_description_1')
    let ugifnkjn = localStorage.getItem('qwawww')
    if (itemNAME.value==""||itemSize.value ==""||itemeDc.value =="") {
        window.alert("you have to fall all things")
    }else{
    let fbkjfb = JSON.parse(ugifnkjn)
    let gydf =   {   
        id:fbkjfb.length +1,
        size:itemSize.value,
        ig:le_t,
        name:itemNAME.value,
        p:itemeDc.value,
        qy:1,
        me:true
    }
    let uhiuh =[...fbkjfb,gydf]
    localStorage.setItem("qwawww",JSON.stringify( uhiuh))
    setTimeout(() => {
        window.location ="html.html"
    }, 300);
}
}
itemCr.addEventListener("click",(e)=>{e.preventDefault() 
 ugikk()})
function upload(){
    let hjb = this.files[0]
    console.log(hjb);
    let ijg =["image/jpeg","image/png"]
    if(ijg.indexOf(hjb.type) ===-1){
        alert("type not supported")
        return
    }
    if (hjb.size >2*1024*1024) {
        alert("image not exced 2MG")
        return
    }
    //le_t =URL.createObjectURL(hjb)
    let vhh =new FileReader()
    vhh.readAsDataURL(hjb) 
    vhh.onload=()=>le_t=vhh.result
}
function jkhbkjbhj(file) {
    
}