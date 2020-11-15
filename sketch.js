const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball1,ball3,ball2,ball4,ball5,ball6,ball7,chain7;
var chain2,chain3,chain4,chain5,chain6;
var ground2,ground3,ground4,ground5,ground6,ground7;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(230,100,30,10);
	ground2=new Ground(270,100,30,10);
	ground3=new Ground(310,100,30,10);
	ground4=new Ground(345,100,30,10);
	ground5=new Ground(390,100,30,10);
	ground6=new Ground(430,100,30,10);
	ground7=new Ground(470,100,30,10);


	ball1=new Paper(240,190,20);
	ball2=new Paper(280,190,20);
	ball3=new Paper(320,190,20);
	ball4=new Paper(355,190,20);
	ball5=new Paper(400,190,20);
	ball6=new Paper(440,190,20);
	ball7=new Paper(480,190,20);

	chain=new Chain(ground.body,ball1.body);
	chain2=new Chain(ground2.body,ball2.body);
	chain3=new Chain(ground3.body,ball3.body);
	chain4=new Chain(ground4.body,ball4.body);
	chain5=new Chain(ground5.body,ball5.body);
	chain6=new Chain(ground6.body,ball6.body);
	chain7=new Chain(ground7.body,ball7.body);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(200);
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball6.display();
  ball5.display();
  ball7.display();
 
  chain.display();
  chain2.display();
chain3.display();
chain4.display();
chain5.display();
chain6.display();
chain7.display();

    drawSprites();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	}
}


