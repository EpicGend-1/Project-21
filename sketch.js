const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var leftbinSide, rightbinSide

var right_button
var up_button
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  right_button = createImg("right.png")
  right_button.position(220,30)
  right_button.size(50,50)
  right_button.mouseClicked(hForce)

  up_button = createImg("up.png")
  up_button.position(20,30)
  up_button.size(50,50)
  up_button.mouseClicked(vForce)
  
  ground =new Ground(200,390,1200,20);
  right = new Ground(790,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1200,20);
  leftbinSide = new Ground(600,340,20,200)
  
  var ball_options={
    restitution: 0.5
  }
  ball = Bodies.circle(100,100,20,ball_options)
  World.add(world,ball)
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  leftbinSide.show()
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}