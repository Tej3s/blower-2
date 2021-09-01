
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball1;


function setup() {
  
  createCanvas(800,400);
 
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);
  blowermouth = new blowermouth(350,250,100,40);
  blower = new blower(500,200, 200,200);
  ball1 = new ball(500,80);
  console.log(ball1);
  button = createButton("Click to blow")
  button.position(width/2, height-100);
  button.class("blowbutton");
  button.mousePressed(blow);


}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  blowermouth.show();
  blower.show();
  ball1.show();
  drawSprites();
  
}

function blow(){
  
  Matter.Body.applyForce(ball1.body, {x:0, y:0}, {x:0, y:0.5});
}