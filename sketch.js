
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,rope;
var platform;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
engine = Engine.create();
world = engine.world;


ground = new Ground(300,100,1200,20);
platform = new Ground(200,height,1200,20)
bob1 = new Bob(250,500,70);
bob2 = new Bob(320,500,70);
bob3 = new Bob(390,500,70);
bob4 = new Bob(460,500,70);
bob5 = new Bob(530,500,70);
chain1 = new Chain(bob1.body,ground.body,-35*4,0);
chain2 = new Chain(bob2.body,ground.body,-35*2,0);
chain3 = new Chain(bob3.body,ground.body,-35*0,0);
chain4 = new Chain(bob4.body,ground.body,-35*-2,0);	
chain5 = new Chain(bob5.body,ground.body,-35*-4,0);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine)
 ground.display(); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:1000})
	}
}

