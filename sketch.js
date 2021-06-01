var track,trackImg;
var jake,jakeImg;
var invisibleGround1, invisibleGround2;
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  jakeImg = loadAnimation("Runner-1.png", "Runner-2.png");

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(15,375,400,10);
  track.addImage(trackImg);

  jake = createSprite(200,360,20,20);
  jake.addAnimation("running", jakeImg);
  jake.scale=0.075;
  
    track.y=track.height/2;
  track.velocityY=4;

  invisibleGround1 = createSprite(17,375,10,800);
  invisibleGround1.visible=false;

  invisibleGround2 = createSprite(383,375,10,800);
  invisibleGround2.visible=false;
}

function draw() {
  background("black");
  console.log(jake.x);
  track.velocityY=4;
  
  jake.x=mouseX;

  jake.collide(invisibleGround1);
  jake.collide(invisibleGround2);

  if (track.y>400){
    track.y= height/2
  }
  
  drawSprites();

}
