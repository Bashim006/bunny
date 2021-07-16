var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
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
function creatapple(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.05;
  apple.velocityY=2;
  apple.lifetime=200;

}
function creatorangeleaf(){
  orangeleaf=createSprite(random(50,350),40,10,10);
  orangeleaf.addImage(appleImg)
  orangeleaf.scale=0.05;
  orangeleaf.velocityY=2;
  orangeleaf.lifetime=200;

}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var abc=Math.round(random(1,2))
  if (frameCount % 80==0){
  if (abc==1){
    creatapple();
  }
  else {
  creatorangeleaf();
  }
  drawSprites();
}
}