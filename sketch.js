const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,ground,tower;


function preload() {
backgroundImage=loadImage("./assets/background.gif")
}



function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  tower=new Tower(150,350,160,310)

  angle=-PI/4
  cannon=new Cannon(180,110,100,50,angle)

 
}

function draw() {
  background(189);
  image(backgroundImage,0,0,width,height);
  Engine.update(engine);
  tower.display()

  cannon.display();


  
   
}
