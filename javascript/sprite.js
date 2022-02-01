/* INIT */
let sprite = document.getElementById("sprite");
let spriteImg = document.getElementById("spriteImg");
let output = document.getElementById("output");

let rightArrow = false;
let leftArrow = false;
let upArrow = false;
let downArrow = false;

sprite.style.left = "100px"; // starting position
sprite.style.top = "100px"; // starting position
spriteImg.style.right = "0px"; // starting animation

let spriteImgNumber = 0; // current animation part of image

/* EVENT LISTENER */
document.onkeydown = keyListener;
document.onkeyup = keyListenerUp;

function keyListenerUp(e) {
    if (e.keyCode == 37) { // leftArrow
        leftArrow = false;
    }
    if (e.keyCode == 38) { //upArrow
        upArrow = false;
    }
    if (e.keyCode == 39) { // rightArrow
        rightArrow = false;
    }
    if (e.keyCode == 40) { // downArrow
        downArrow = false;
    }
}

/* CHECK PRESSED KEY */
function keyListener(e) {
    //console.log(e);
    //console.log(e.keyCode);
    if (!e) {
        e = window.event; //Internet Explorer
    }
    if (e.keyCode == 37) { // leftArrow
        leftArrow = true;
    }
    if (e.keyCode == 38) { //upArrow
        upArrow = true;
    }
    if (e.keyCode == 39) { // rightArrow
        rightArrow = true;
    }
    if (e.keyCode == 40) { // downArrow
        downArrow = true;
    }
}

/* MOVE SPRITE */
function moveSprite(dx, dy) {
    // current position
    let x = parseInt(sprite.style.left);
    let y = parseInt(sprite.style.top);

    // new position
    x += dx;
    y += dy;

    // assign new position
    sprite.style.left = x + "px";
    sprite.style.top = y + "px";

    // print new position
    output.innerHTML = `x: ${x}, y: ${y}`;
}

/* ANIMATE CHARACTER */
function animateCharacter() {
    if (spriteImgNumber < 6) { // new img position
        spriteImgNumber++;
        let x = parseInt(spriteImg.style.right);
        x += 151.5; // ANPASSEN!
        spriteImg.style.right = x + "px";
    }
    else { // cycle loop finished: back to start animation
        spriteImg.style.right = "0px";
        spriteImgNumber = 0;
    }

}

function gameLoop() {
    if (upArrow) {
        if (sprite.offsetTop <= 0) {

        } else {
            moveSprite(0, -10);
            animateCharacter();
        }
    }
    if (downArrow) {
        if (sprite.offsetTop >= 460){

        } else {
            moveSprite(0, 10);
            animateCharacter();
        }
    }
    if (rightArrow) {
        if (sprite.offsetLeft >= 930) {

        } else {
            moveSprite(10, 0);
            animateCharacter();
        }

    }
    if (leftArrow) {
        if(sprite.offsetLeft <= 0){

        } else {
            moveSprite(-10, 0);
            animateCharacter();
        }
        
    }
    setTimeout(gameLoop, 50);
}
gameLoop();