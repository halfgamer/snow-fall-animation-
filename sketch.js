
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,thunder1,thunder2,thunder3,thunder4,bat1,bat2,bat3,bat4,bat5,invi,invi2,moon,coming;
var drops = [];
var fulldops=1000;
function preload(){
	boy=loadImage("images/snow1.jpg");
	thunder1= loadImage("images/1.png")
	thunder2=loadImage("images/2.png")
	thunder3=loadImage("images/3.png")
	thunder4=loadImage("images/4.png")
	bat1=loadImage("images/walking_2.png")
	bat2=loadImage("images/walking_3.png")


	
  }

function setup() {
	createCanvas(1000, 1000);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(50,477,1000,20);
	moon=new invis(10,20,10,10)
	coming=new mango(20,20,4)
	
	if(frameCount % 150 === 0){

        for(var i=0; i<fulldops; i++){
            drops.push(new createDrop(random(0,20000), random(0,20000)));
        }

    }
	invi=new invis(300,250,120,20)
	invi2=new invis(290,280,30,30)
	Engine.run(engine);

}

function draw() {


  background(boy);
  
  //Add code for displaying text here!
  if(frameCount % 150 === 0){

	for(var i=0; i<fulldops; i++){
		drops.push(new createDrop(random(0,400), random(0,400)));
		console.log("hi")
	}

}
  
  

  treeObj.display();
  mango1.display();
  //moon.display();
  
  invi2.display();
  invi.display()
  
;
  groundObject.display();
  coming.display();
  var rand = Math.round(random(1,4))
  if (frameCount%10===0){
	
	  if (rand===1 ){
		 image(thunder1,100,30,359,559)
		  console.log("2222")
	  }
	  if (rand===2){
		  image(thunder2,100,30,359,459)
	  }
	  if (rand===3){
		  image(thunder3,100,30,359,459)
	  }
	  if (rand===40){
images(thunder4,100,30,359,459)
	  }
	  



  }
  image(boy ,0,0,1000,1000);
  for(var i = 0; i<fulldops; i++){
	drops[i].showDrop();
	drops[i].updateY()
	
}


  
  //if()
}
