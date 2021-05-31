
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3;
var gr;
var dustbin1;
function preload()
{
dustbin1Img= loadImage("dustbinImg.png");
paper1Img = loadImage("paperImg.png")
}

function setup() {
	createCanvas(1100,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
 paperObject = new Paper(200,450,40);

 DustbinObject = new Dustbin(900,650,200,20);
 Dustbin1Object = new Dustbin(1000,500,20,300);
 Dustbin2Object = new Dustbin(800,540,20,250);
 groundObject=new Ground(1000,670,4000,20);
 Launcher1 = new launcher(paperObject.body,{x:200, y:100});
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("white");

  Engine.update(engine);
 
  groundObject.display();

  DustbinObject.display();
  Dustbin1Object.display();
  Dustbin2Object.display();

 

 Launcher1.display();
 paperObject.display();

 dustbin1 = createSprite(900,500,200,200);
 dustbin1.addImage(dustbin1Img);

  drawSprites();
  
}

function mouseDragged(){
 Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 Launcher1.fly();
}
//function keyPressed() {
 // if (keyCode === UP_ARROW) {

   // Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:385,y:-385});
  
 // }
//}