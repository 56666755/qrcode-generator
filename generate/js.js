let valueofinput=document.getElementById("value-of-text");
let generateqr=document.getElementById("genrate");
let downloadqr=document.getElementById("download");
// let downloadqr=document.getElementById("download");
let sizeofqr=document.getElementById("sizes");
let qrstorein=document.querySelector(".containerofqr");

var size="";
size=sizeofqr.value;
sizeofqr.addEventListener("change",()=>{
    size=sizeofqr.value;
console.log(`the size is ${size}`)
})

generateqr.addEventListener("click",(e)=>{
e.preventDefault();
generateqrcode();
})
function generateqrcode(){
    qrstorein.innerHTML="";
var newqr=new QRCode(qrstorein,{
    text:valueofinput.value,
    height:size,
    width:size,
    colorDark: "#000000", // QR color (black)
    colorLight: "#ffffff", // Background color (white)
})
console.log(newqr)
}


