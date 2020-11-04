var bullet, wall;
var speed, weight, thickness;

function setup(){
createCanvas(1600,400);

thickness = random(30,46);

wall = createSprite(1200,200,thickness,height/2);

speed = random(50,150);
weight = random(30,52);

bullet = createSprite(50,200,50,50);
bullet.velocityX = speed;

}
function draw(){
  background("black");

if(collided(bullet,wall)){
  bullet.collide(wall);
  var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);

  if(damage>10){
    bullet.shapeColor = color(255,0,0);
  }
  if(damage<10){
    bullet.shapeColor = color(0,255,0);
  }
  bullet.x = 1160;
}


  drawSprites();
}
function collided(b,w){ 

 bulletRightEdge = b.x + b.width;
 wallLeftEdge = w.x;

 if(bulletRightEdge>=wallLeftEdge){
   return true;
 }
return false;
}