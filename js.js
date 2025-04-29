// ✅ Selecting elements correctly
const inputtext = document.getElementById("input");  // Input field for text/URL
const errorCorrection = document.getElementById("errorCorrection"); // Error correction dropdown
const sizes = document.querySelector("#correction"); // Second dropdown (Size selector)
const generateqr = document.querySelector(".generate"); // Generate button
const download = document.querySelector(".download"); // Download button
const qrcontainter = document.querySelector(".boxs"); // QR code display box
const imageqr=document.querySelector("#uploadphoto")
// ✅ Default size
let size = sizes.value;

// ✅ Update size when user changes it
sizes.addEventListener("change", () => { 
    size = sizes.value;
});

// ✅ Generate button event listener
generateqr.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Generate button clicked");
    generateqrcode();
});

// ✅ Function to generate QR Code
function generateqrcode() {
    // imageqr.innerHTML = ""; // Remove old QR code
    qrcontainter.innerHTML = ""; // Remove old QR code

    // // ✅ Generate new QR Code
    // var qr = new QRCode(qrcontainter, {
    //     text: imageqr.value,  // Get text from input field
    //     width: size,  // QR code width
    //     height: size, // QR code height
    //     colorDark: "#000000", // QR color (black)
    //     colorLight: "#ffffff", // Background color (white)
    // });
    if(inputtext.value===""){

        inputtext.innerHTML = ""; // Remove old QR code
    }else{
        // ✅ Generate new QR Code
    var qr = new QRCode(qrcontainter, {
        text: inputtext.value,  // Get text from input field
        width: size,  // QR code width
        height: size, // QR code height
        colorDark: "black", // QR color (black)
        colorLight: "#fff", // Background color (white)
    }); 
    
    }}
 

//  Download QR Code as image
// download.addEventListener("click", () => {
//     let qrImage = qrcontainter.querySelector("img");
//     if (qrImage) {
//         let imgURL = qrImage.src;
//         let a = document.createElement("a");
//         a.href = imgURL;
//         a.download = "qrcode.png";
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         console.log("QR Code Downloaded!");
//     } else {
//         alert("Generate QR Code first!");
//     }
// })
