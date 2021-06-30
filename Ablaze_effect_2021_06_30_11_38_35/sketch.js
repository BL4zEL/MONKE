var bananag,bananai,obstacleImage,backgrounde;
var monkey,monkeyr,bgi,ground;
var ground1
var gamestate;
var score = 0;
var PLAY = 1;
var END = 0;
var obstacleGroup;
var count;
 var bananaGroup;
function preload(){
 bgi=loadImage("jungle.jpg");
  monkeyr= 
    loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_05.png",
"Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png")
  bananai=loadImage("banana.png");
  
}



function setup() {
  createCanvas(400,400);
  gamestate = PLAY ;
  score=0;
  backgrounde = createSprite(200,200,0,0);
  backgrounde.addImage("brackgrounde",bgi);
  monkey=createSprite(75,350,30,30);
  monkey.addAnimation("monkey",monkeyr);
  monkey.scale=0.1; 
  ground = createSprite(400,389,400,20);
  ground.visble= false ;
  ground1 = createSprite(400,390,400,20);
  ground1.visble= false ;
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
}

function draw() {
  background(220);
  spawnObstacles();
  yu();
  ground.x = ground.width /2;
  ground.velocityX = -4;
  monkey.collide(ground);  
  if (gamestate===PLAY) {
  if(keyDown('space') && monkey.y >= 330) {
    monkey.velocityY = -11 }  
   monkey.velocityY = monkey.velocityY + 0.8; }
  if(bananaGroup.isTouching(monkey))
   {score = score+2
    bananaGroup.destroyEach();
    monkey.scale=monkey.scale+0.1
   }
   if(obstacleGroup.isTouching(monkey))
   {monkey.scale=monkey.scale-0.1}
  if(monkey.scale===0){
    gameState=END
  }
  if(gamestate===END){
  bananaGroup.setVelocityEach(0); 
   obstacleGroup.setVelocityEach(0);
  }
  drawSprites();
  stroke("white");
  textSize(19);  
  text("SCORE:"+score,100,50);
  count = Math.round(World.frameCount/4);      
  text("/SURVIVAL TIME:"+count,200,50);
  
}


function spawnObstacles() {
  if(World.frameCount % 80 === 0) {
    var obstacle= createSprite (400,375,50,50);
    obstacleImage = loadImage ("stone.png")
    obstacle.addImage("obstacleGroup",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX = -6;
    obstacle.scale = 0.1;
    obstacle.lifetime = 70;
    obstacle.setCollider("circle",0,0,1.2);
    obstacleGroup.add(obstacle);
  }}
function yu(){
  if (World.frameCount % 80 === 0) {
     var banana = createSprite (400,315,50,50);
     banana.addImage("banana",bananai);
     banana.scale= 0.1;
     banana.velocityX = -6;
     banana.scale = 0.1;
     banana.lifetime = 70;
     banana.setCollider("rectangle",50,50); 
     bananaGroup.add( banana);}}