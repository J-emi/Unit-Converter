let number = document.getElementById("input")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function calc() {
    value = number.value 

    let metersToFeet = value * 3.280
    let feetsToMeter = value * 0.304
    length.innerText = value + " meters = " + metersToFeet.toFixed(3) + " feet | " + value + " feet = " + feetsToMeter.toFixed(3) + " meters"

    let litersToGallons = value * 0.264172
    let gallonsToLiters = value * 3.785412
    volume.innerText = value + " liters = " + litersToGallons.toFixed(3) + " gallons | " + value + " gallons = " + gallonsToLiters.toFixed(3) + " liters"
    
    let kilosToPounds = value * 2.2
    let poundsToKilos = value / 2.2046
    mass.innerText = value + " kilos = " + kilosToPounds.toFixed(3) + " pounds | " + value + " pounds = " + poundsToKilos.toFixed(3) + " kilos"
}
