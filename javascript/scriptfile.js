let image = document.getElementById("imgOfCar");
let car = document.getElementById("nameOfCar");
let badge = document.getElementById("brandOfCar");
let ps = document.getElementById("psOfCar");
let type = document.getElementById("driveTypeOfCar");
let position = document.getElementById("position");

let counter = 0;

function nextCar() {
    
    for (let i = counter; i < counter + 1; i++) {

        image.innerHTML = `<img src="./img/${i + 1}.jpg">`;
        car.innerHTML = name[i];
        badge.innerHTML = marke[i];
        ps.innerHTML = `<p>${leistung[i]} PS</p>`;

        if (i == 0 || i == 3 || i == 5 || i == 6 || i == 8) {
            type.innerHTML = antrieb[0];
        }
        if (i == 1 || i == 7) {
            type.innerHTML = antrieb[1];
        }
        if (i == 2 || i == 4 || i == 9) {
            type.innerHTML = antrieb[2];
        }

        position.innerHTML = `<p> ${i+1} / 10 </p>`;
    }

    counter++
    if (counter == 10) {
        counter = 0;
    }

}
nextCar();