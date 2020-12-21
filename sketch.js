var movingrect,fixedrect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 200, 50, 70);
  fixedrect = createSprite(100,200,100,20);
  movingrect.velocityX = -3;
  fixedrect.velocityX = 3;
 

  gameobject1 = createSprite(100,50,50,50);
  gameobject2 = createSprite(200,50,50,50);
  gameobject3 = createSprite(300,50,50,50);
  gameobject4 = createSprite(400,50,50,50);
}

function draw() {
 
  background(0);
  
  //movingrect.x = World.mouseX;
  //movingrect.y = World.mouseY;

  gameobject2.shapeColor = "green";
  gameobject3.shapeColor = "green";
  gameobject4.shapeColor = "green";
  
  
  /*if(isTouching(movingrect,gameobject1)){
    movingrect.shapeColor = "lime";
    gameobject1.shapeColor = "lime";
  } 
  else{
    movingrect.shapeColor = "blue";
    gameobject1.shapeColor = "green";
  }*/

  bounceOff(movingrect,fixedrect);
   drawSprites();
}

