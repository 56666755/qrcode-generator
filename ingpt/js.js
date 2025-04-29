// ✅ Select Elements
const inputText = document.querySelector("#input");
const sizeSelect = document.querySelector("#correction");
const generateBtn = document.querySelector(".generate");
const downloadBtn = document.querySelector(".download");
const qrContainer = document.querySelector(".boxs");

// ✅ Generate QR Code Function
function generateQRCode() {
    qrContainer.innerHTML = ""; // Clear previous QR code
    
    const size = sizeSelect.value; // Get selected size
    const text = inputText.value.trim(); // Get input text
    
    if (text === "") {
        alert("Please enter a valid URL or text!");
        return;
    }
    
    const qr = new QRCode(qrContainer, {
        text: text,
        width: parseInt(size),
        height: parseInt(size),
        colorDark: "#000000",
        colorLight: "#ffffff"
    });
}

// ✅ Download QR Code Function
function downloadQRCode() {
    const img = qrContainer.querySelector("img");
    if (!img) {
        alert("Generate a QR Code first!");
        return;
    }
    
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
}

// ✅ Event Listeners
generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    generateQRCode();
});

downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    downloadQRCode();
});
