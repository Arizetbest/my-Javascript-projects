// let body = {Human:"boy",woman:"girl",son:"child"};
//  let school = ["university","secondary","primary"]

let yellowLight = "well"
let blueLight = "off"
let redLight = "danger"
let dayTime = 10
switch (yellowLight, blueLight) {
    case yellowLight:
        alert("on")
        break;
    case blueLight:
        if (blueLight !== "off") {
            alert("its sleeping time kids")
        } else if (dayTime === 10) {

            alert("blueLight is on")
        }
        break;
    case redLight:
        if (redLight === "danger") {
            alert("showing Danger");
        }

        break;
    default:
        text = "`The Bulbs are ${10} and none is good`";

}