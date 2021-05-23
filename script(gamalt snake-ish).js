
const canvas = document.querySelector('#gluggi');
const player = document.getElementById('leikmadur');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
let direction = "right";
let speed = 1;
let currentX = 40;
let currentY = 40;

function checkDirection(){
    document.addEventListener('keydown', function(event) {
        const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
        if(key=="ArrowRight"){
            direction = "right";
        }
        else if(key==="ArrowLeft"){
            direction = "left";
        }
        else if(key==="ArrowUp"){
            direction = "up";
        }
        else if(key==="ArrowDown"){
            direction = "down";
        }
    });
}

function outOfBounds(){
    if(currentX>480){
        currentX = 10;
    }
    if(currentX<8){
        currentX = 480;
    }
    
    if(currentY>480){
        currentY = 10;
    }
    if(currentY<8){
        currentY= 480;
    }
}
function placeRandom(item){
    X = Math.floor(Math.random() * 420)+40; 
    Y = Math.floor(Math.random() * 420)+40; 
}
function update(){
    if(direction==="right"){
        currentX = currentX + speed;
    }
    else if(direction==="left"){
        currentX = currentX - speed;
    }
    else if(direction==="up"){
        currentY = currentY - speed;
    }
    else if(direction==="down"){
        currentY = currentY + speed;
    }
    outOfBounds();
}

function move(){
    player.style.left = currentX + 'px';  
    player.style.top = currentY + 'px';
}

function gameLoop(){
    update();
    move();
    requestAnimationFrame(gameLoop);
}

checkDirection();
requestAnimationFrame(gameLoop);

