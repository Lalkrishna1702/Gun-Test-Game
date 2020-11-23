var bullet, wall;
var Bulletspeed, Bulletweight, thickness, sound;

function preload(){

  sound = loadSound("Gun+Silencer.mp3");

}

function setup() {

  createCanvas(1600,400);
  
  Bulletspeed = random(220,320);
  Bulletweight = random(30,50);
  thickness = random(22,83);

  bullet = createSprite(100,200,50,5);
  bullet.shapeColor = color(255,255,255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  sound.play();

}

function draw() {
  background(0);  
 
  bullet.velocityX = Bulletspeed;
  
  if(Collision(bullet, wall)){

    bullet.velocityX = 0;
    var damage = 0.5*Bulletweight*Bulletspeed*Bulletspeed / (thickness * thickness * thickness);

    if(damage < 10){
      bullet.shapeColor = color(0,255,0);
    }else{
      bullet.shapeColor = color(255,0,0);     
    }

  }

  drawSprites();

}

function Collision(lbullet,lwall){

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x - lwall.width;

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }else{
    return false;
  }
  
}