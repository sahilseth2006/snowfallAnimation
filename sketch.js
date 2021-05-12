const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var snowGroundImage,snowGround

function preload() {
  snowGroundImage=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(1000,800);

  engine = Engine.create();
	world = engine.world;

 snowGround=createSprite(500, 400, 0, 0);
snowGround.addImage(snowGroundImage);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

 
  drawSprites();
 
}