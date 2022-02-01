let content = document.getElementById('content');
let koerper = document.getElementById('koerper');
let knopf = document.getElementById('knopf');
let counter = 1;
koerper.style.backgroundImage = `url("./img/background.jpg")`;
function addRow() {
    if (counter < 15) {
        for (let i = counter; i < counter + 3; i++) {
            content.innerHTML += `<img id="img" src="./img/city${i}.jpg">`;

        }
        counter += 3;
    }
    if (counter > 15) {
        knopf.innerHTML = `<p>Das wars leider schon...</p>`;
    }
    
}