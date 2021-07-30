const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(0,590,0,0,options)
  World.add(world,ground)

  tower = Bodies.rectangle(80,200,0,0,options)
  World.add(world,tower)
  
  cannon = new Cannon(180, 110, 110, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  
  rect(ground.position.x,ground.position.y,1200,1);

  image(towerImage,tower.position.x,tower.position.y,160,320)

  cannon.display();
  
  
  for(var i=0;i<balls.length; i++){
    showCannonBall(balls[i],i)
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonBall= new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function showCannonBall(ball,index){
  ball.display();
if(ball.body.position.x>=width || ball.body.position.y>=height-50){
World.remove(world,ball.body);
balls.splice(index,1)
}
  
}











