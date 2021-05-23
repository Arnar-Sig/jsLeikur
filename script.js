
const canvas = document.querySelector('#gluggi');
const player = document.getElementById('leikmadur');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
let speed = 1;
let currentX = 250;
let currentY = 250;
let mouseX = 0;
let mouseY = 0;


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

function mouseDrag(){
    
}
function update(){

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

requestAnimationFrame(gameLoop);

