var player, player_running,edges,back,backImage,invground,Banana,BananaGroup,obstacle_img,stoneGroup,Stone,Score,PLAY,END;

function preload(){
 backImage=loadImage("Jungle2.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  
        
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  
  createCanvas(600, 200);
  
  back = createSprite(00,100,1,00)
  back.addImage(backImage)
  back.scale = 1;
 back.x = back.width /2;

  edges=createEdgeSprites();

   player = createSprite(56,150,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  Score = 0;
  
  invground = createSprite(300,190,600,10)
  invground.visible = false;
  
  PLAY = 1;
  END = 0;
  gameState = PLAY;

  
  
  BananaGroup = createGroup();
  
  stoneGroup = createGroup();
  
}

function draw() {
  background(255);
 
  
  
  
  if(gameState ===PLAY){
   if(keyDown("space")&&player.y>155 ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.7;
  player.collide(edges)
  
  if (back.x < 150){
      back.x = back.width/2;
    } 
     back.velocityX = -5;
 
 rand = Math.round(random(10,60));
    switch (Score){
   case 10: player.scale = 0.12;
              break;
     case 20: player.scale = 0.14;
              break;
      case 30: player.scale = 0.16;
              break;
      case 40: player.scale = 0.18;
              break;
       case 50: player.scale = 0.2;  
              break;
        case 60: player.scale = 0.22;
              break;
     
      default: break;
    }                
       
   
 
  
  if(player.isTouching(BananaGroup)){
    Score =Score+2;
    BananaGroup.destroyEach()
    
  }
   banana();  
    stone();
    if(player.isTouching(stoneGroup)){
       player.scale = 0.1
      gameState===END;
       
       }  
  } else if(gameState===END){
  if (player.scale=0.1){
   back.velocity = 0; 
  }
    
    
  }
  
  player.collide(invground)
  
 
  
  
  
 
 
  drawSprites();
  text("Score: "+Score,500,27)
}

function banana(){
if (frameCount%140 ==0) { 
 Banana = createSprite(600,42)
 Banana.addImage(bananaImage) 
Banana.scale = 0.1;
Banana.velocityX = -5;
console.log(Banana.depth)
  BananaGroup.add(Banana)
  banana.depth = 4
  Banana.lifetime = 135;

  
} 

}  

function stone(){
if (frameCount%200 ==0) { 
 Stone = createSprite(350,150)
 Stone.addImage(obstacle_img) 
Stone.scale = 0.15;
Stone.velocityX = -5;
  stoneGroup.add(Stone)
  Stone.depth = 6
  Stone.lifetime = 135;

  
} 

}
  