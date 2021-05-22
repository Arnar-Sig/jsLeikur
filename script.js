
const canvas = document.querySelector('#gluggi');
let player = document.getElementById('leikmadur');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');
let direction = "right";
let speed = 1;
let currentX = 10;
let currentY = 10;

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
            direction 
        }
    });
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

