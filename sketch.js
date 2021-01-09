const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles=[]
var plinkos=[]
var divisons=[]
var divHeight = 300;
var particleScore = 0;
var turns = 0;
var particle11;
var gameState =  "play"
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
	//part1 = new Particle(50,50,10,10)
	ground1 = new Ground(400,793,800,20)
	//ground2 = new Ground(260,703,600,20)

	for (var k = 0; k <=width; k=k+80) {
		divisons.push(new Border(k,height-divHeight/2,10,divHeight))
	}
	
	for (var j = 50; j <=width; j=j+50) {
	plinkos.push(new Plinko(j,75))
	}

	for (var t = 25; t <=width; t=t+50) {
		plinkos.push(new Plinko(t,175))
		}

		
	for (var t = 5; t <=width; t=t+50) {
		plinkos.push(new Plinko(t,275))
		}

				
	for (var t = 38; t <=width; t=t+50) {
		plinkos.push(new Plinko(t,375))
		}
}

function draw() {
  rectMode(CENTER);
  background(0);
  textSize(35)
  fill("white")
textSize(25)

text("500",17,520)
text("500",97,520)
text("500",177,520)
text("500",257,520)
text("400",337,520)
text("400",417,520)
text("400",497,520)
text("200",577,520)
text("200",657,520)
text("200",737,520)




text("SCORE: "+particleScore,56,40)
  Engine.update(engine)
 //part1.display()
 ground1.display()
 for (var k = 0; k <divisons.length; k++) {
	 divisons[k].display();
}

for (var e = 0; e < plinkos.length; e++) {
plinkos[e].display()
}
//if(frameCount%60===0){
//	particles.push(new Particle(random(width/2-10,width/2+10),10,10))
//}


if (particle11 != null) {
particle11.display();
if (particle11.body.position.y>760) 
{
if (particle11.body.position.x < 300)
{ 
	particleScore = particleScore+500;
	particle11=null;
	if (turns >=5) gameState = "end"
} else if (particle11.body.position.x > 300&&particle11.body.position.x < 500)
{ 
	particleScore = particleScore+400;
	particle11=null;
	if (turns >=5) gameState = "end"
} else if (particle11.body.position.x > 500&&particle11.body.position.x < 800)
{ 
	particleScore = particleScore+200;
	particle11=null;
	if (turns >=5) gameState = "end"
}

}
}
if (gameState === "end") {
textSize(45)
fill("lightblue")
text("GAME OVER",270,330)
} 
}

function mouseReleased() {
	if (gameState==="play") {
		turns++;
		console.log(turns)
		particle11 = new Particle(mouseX,10,10,10)
	}
}