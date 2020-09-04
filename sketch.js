var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
 /* fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;
  
  movingRect=createSprite(300, 50, 40, 20);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;*/
  fixedRect=createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "orange";
  fixedRect.debug = true;
  
  movingRect=createSprite(400, 800, 40, 20);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;

  fixedRect.velocityY = +5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);
  /*movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";
    } else{
      movingRect.shapeColor = "orange";
      fixedRect.shapeColor = "orange";
    } */
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
      &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
        movingRect.velocityX = movingRect.velocityX*(-1);
        fixedRect.velocityX = fixedRect.velocityX*(-1);
      }
    if(movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
      &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
      }   
      
  drawSprites();
}