var garden,rabbit;
var gardenImg,rabbitImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX

  console.log("Bigger " + "Square " + "is " + "Leaf")

  drawSprites();
  spawnApples();
  spawnLeaves();
}

function spawnApples(){
if (frameCount%60===0){
var apple = createSprite(random(50,350),40,10,10);
apple.velocityY=3;
apple.lifetime=80;

}
}

function spawnLeaves(){
  if(frameCount%60===0){
    var leaf = createSprite(random(100,275), 40, 20, 20);
    leaf.velocityY=4;
    leaf.lifetime=80;
  }
}


  var rand = Math.round(random(1,2));

  if (frameCount % 80 == 0){
  if (rand == 1){
    spawnApples();

    
  }
  else spawnLeaves();
  }
