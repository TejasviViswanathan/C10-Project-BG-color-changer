var ship, sea,shipImg,seaImg;
function preload(){
  seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1200,400);
  sea = createSprite(15,180,400,10);
  sea.addImage(seaImg);
  ship = createSprite(800,250,60,60);
  ship.addAnimation("moving",shipImg);
  ship.scale=0.4
}

function draw() {
  background("blue")
  console.log=ship.y
  sea.velocityX=-4
  if(sea.x<0){
    sea.x=sea.width/2
  }
  

 drawSprites();
}