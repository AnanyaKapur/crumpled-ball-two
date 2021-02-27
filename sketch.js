
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,700,800,20)
 box1=new Box(610,680,20,100)
 box2=new Box(790,680,20,100)
 box3=new Box(700,680,200,20)
 ball=new Ball(50,680,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 ground.display();
 box1.display()
 box3.display()
 box2.display()
 ball.display()
 
}


	


function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})
	}
}

