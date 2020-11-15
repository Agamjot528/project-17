
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving ",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background("white");
  
  food();
  obstacles();
  
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  score =Math.ceil(frameCount/frameRate());
  text("Survival time: "+score,100,50);
  
  monkey.collide(ground);
  
  
  drawSprites();
  
  
}

function food(){
  
   if (frameCount % 80 === 0){
     banana=createSprite(400,200,10,10);
     banana.scale=0.1;
     banana.addImage(bananaImage);
     banana.y=Math.round(random(120,200));
     banana.velocityX=-4;
     banana.lifetime=100;
     bananaGroup.add(banana);
   }
  
}

function obstacles(){
  if (frameCount % 300 === 0){
    obstacle=createSprite(400,315,20,20);
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacle.addImage(obstaceImage);
    obstacle.lifetime=80;
    
    obstacleGroup.add(obstacle);
  }
  
}


