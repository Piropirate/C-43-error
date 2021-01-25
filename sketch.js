const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hr, min, sec;
var hrAngle, minAngle, secAngle;
var hrhand,minhand, sechand;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  hr = hour();
  min = minute();
  sec = second();

  angleMode(DEGREES);
  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);

  sechand = new Second();
  minhand = new Minute();

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  

  sechand.display();
  minhand.display();

  drawSprites();
}