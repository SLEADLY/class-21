var fixedRect,movingRect,wall1,wall2,wall3,wall4


function setup() {
  createCanvas(800,800);
 fixedRect = createSprite(400, 200, 50, 50);
movingRect = createSprite (400,400,50,50);
wall1 = createSprite (20,400,15,300);
wall2 = createSprite (170,250,300,15);
wall3 = createSprite (20,400,15,300);
fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "red"  
fixedRect.debug=true;

}

function draw() {
  background(0);
  
movingRect.y=mouseY;
movingRect.x=mouseX;

if(isTouching(wall1,movingRect)){
  wall1.shapeColor = "purple"
  movingRect.shapeColor = "purple"  
    

}
else{
 wall1.shapeColor = "red"
  movingRect.shapeColor = "blue"  
    
}
drawSprites();
}

function isTouching(object1,object2){
if (object1.x - object2.x < object2.width/ 2 + object1.width/2
&& object2.x - object1.x < object2.width/ 2 + object1.width/2
&& object1.y - object2.y < object2.height/ 2 + object1.height/2
&& object2.y - object1.y < object2.height/ 2 + object1.height/2
){
  return true;
 
}
else{
  return false;
  
}
}