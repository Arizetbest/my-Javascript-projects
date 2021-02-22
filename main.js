// let yellowLight = "well"
// let blueLight = "off"
// let redLight = "danger"
// let dayTime = 10


// const display = document.getElementById("op")

// const age = document.getElementById("getAge")
const ImgOn = "/images/onlight.jpg";
const ImgOff = "/images/offlight.jpg";



const light = document.getElementById("btnOff")
const display = document.getElementById("btnOn").addEventListener("click", function() {
    document.getElementById("myImage").src = ImgOn

})
document.getElementById("btnOff").addEventListener("click", function() {
    document.getElementById("myImage").src = ImgOff
})