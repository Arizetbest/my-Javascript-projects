// let body = {Human:"boy",woman:"girl",son:"child"};
//  let school = ["university","secondary","primary"]

let yellowLight = "well"
let blueLight = "off"
let redLight = "danger"
let dayTime = 10

const display = document.getElementById("op")

const age = document.getElementById("getAge")

const event = document.getElementById("submit").addEventListener("click", function() {
    //console.log(age.value)
    display.innerHTML = "Your age is " + age.value;
})

// switch (yellowLight, blueLight) {
//     case yellowLight:
//         alert("on")
//         break;
//     case blueLight:
//         if (blueLight !== "off") {
//             alert("its sleeping time kids")
//         } else if (dayTime === 10) {
//             // document.getElementById("operations").innerHTML = "The blue light is on";
//             v.innerHTML = "Hello JavaScript";
//             v.style.background = "purple"
//             v.style.height = "200px"
//         }
//         break;
//     case redLight:
//         if (redLight === "danger") {
//             alert("showing Danger");
//         }

//         break;
//     default:
//         let text = "`The Bulbs are ${10} and none is good`";
//         alert("get a new bulb")

// }