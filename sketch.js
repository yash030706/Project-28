var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint
var dustbinObj, paperObject, groundObject;
var world,launcher;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	dustbinObj = new dustbin(1200,650);
	paperObject = new paper(200,500,40);
	groundObject = new ground(width/2,670,width,20);
	launcher = new Launcher(paperObject.body,{x:200,y:400})
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);  
}


function draw() {
  rectMode(CENTER);
  background(230);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  launcher.display();
  //keyPressed();
  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}



