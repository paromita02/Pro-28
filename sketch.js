const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, sling;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
  boy=loadImage("boy.png");
  bk=loadImage("bk.jpg");
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;
groundObject=new Ground(width/2,608,width,20);

stoneObj=new Stone(235,420,20); 


mango1=new Mango(1130,130,20);
mango2=new Mango(1160,236,20);
mango3=new Mango(1000,150,20);
mango4=new Mango(1090,70,20);
mango5=new Mango(800,70,20);
mango6=new Mango(1060,230,20);
mango7=new Mango(950,230,20);




treeObj=new Tree(1050,620);
sling=new Slingshot(stoneObj.body,{x:240,y:460})  
Engine.run(engine);
 
}

function draw() {

  background(bk);
  textSize(20);
  fill('black');
  textFont("italic");
  text("Press Space to get another stone to Play!!",50 ,50);
  image(boy ,200,380,200,300);
  
  

  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  
 
  stoneObj.display();

  groundObject.display();
  sling.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  
  
  
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  sling.attach(stoneObj.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r)
 {
   Matter.Body.setStatic(lmango.body , false);
 } 
}


