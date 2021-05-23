
const canvas = document.querySelector('#gluggi');
const player = document.getElementById('leikmadur');
const page = document.getElementsByTagName('BODY')[0];
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
let speedX = 0;
let speedXdir = 0;
let speedY = 0;
let speedYdir = 0;
let overZero = 0;
let currentX = 250;
let currentY = 250;
let mouseX = 0;
let mouseY = 0;
let mouseDown = false;


function outOfBounds(){

    if((currentX + speedX)>480){
        speedX = -speedX;
    }
    if((currentX + speedX)<8){
        speedX = -speedX;
    }
    
    if((currentY + speedY)>480){
        speedY = -speedY;
    }
    if((currentY + speedY)<8){
        speedY = -speedY;
    }

}

function mouseDrag(){
    player.addEventListener('mousedown', e => {
        mouseDown = true;
        console.log("mousedown!");
    });
    page.addEventListener('mouseup', e => {
        if(mouseDown==true){
            mouseX = event.clientX;
            mouseY = event.clientY;
            console.log("mouseup!");
            mouseDown = false;
            speedX = (speedX + (currentX-mouseX));
            speedY = (speedY + (currentY-mouseY));
            console.log('speedX = ' + speedX);
            console.log('speedY = ' + speedY);

        }
    });
}
function update(){
    outOfBounds();
    currentX = (currentX + speedX);
    currentY = (currentY + speedY);
    if(speedX>0){
        speedX = speedX -1;
    }
    if(speedY>0){
        speedY = speedY -1;
    }
    if(speedX<0){
        speedX = speedX +1;
    }
    if(speedY<0){
        speedY = speedY +1;
    }
    if(speedX===0){
        overZero = overZero + 1;
    }
    if(speedY===0){
        overZero = overZero +1 ;
    }
    if(overZero===2){
        speedX=0;
        speedY=0;
    }
    

    /*
    if(speedX>0){
        speedX = speedX -1;
        if(speedX<0){
            speedX = 0;
        }
    }
    if(speedY>0){
        speedY = speedY -1;
        if(speedY<0){
            speedY=0;
        }
    }
    if(speedX<0){
        speedX = speedX +1;
        if(speedX>0){
            speedX=0;
        }
    }
    if(speedY<0){
        speedY = speedY +1;
        if(speedY>0){
            speedY=0;
        }
    }
    */
    
    
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

mouseDrag();
requestAnimationFrame(gameLoop);

