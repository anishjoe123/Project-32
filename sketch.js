const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var polygon_img;
var block1,block2,block3,block4,block5,block6,block7
var block8,block9,block10,block11,block12
var block13,block14,block15
var block16
var block1a,block2a,block3a,block4a,block5a
var block6a,block7a,block8a
var block9a
var bg, backgroundImg
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackground()
}
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground()
    stand1 = new Stand(390,300,250,10)
    stand2 = new Stand(700,200,200,10)
    score = 0

    ball=Bodies.circle(50,200,20)
    World.add(world,ball)

    //first
    block1 = new Box(300,275,30,40)
    block2 = new Box(330,275,30,40)
    block3 = new Box(360,275,30,40)
    block4 = new Box(390,275,30,40)
    block5 = new Box(420,275,30,40)
    block6 = new Box(450,275,30,40)
    block7 = new Box(480,275,30,40)

    block8 = new Box(330,235,30,40)
    block9 = new Box(360,235,30,40)
    block10 = new Box(390,235,30,40)
    block11 = new Box(420,235,30,40)
    block12 = new Box(450,235,30,40)

    block13 = new Box(360,195,30,40)
    block14 = new Box(390,195,30,40)
    block15 = new Box(420,195,30,40)

    block16 = new Box(390,155,30,40)

    //second
    block1a = new Box(640,175,30,40)
    block2a = new Box(670,175,30,40)
    block3a = new Box(700,175,30,40)
    block4a = new Box(730,175,30,40)
    block5a = new Box(760,175,30,40)

    block6a = new Box(670,135,30,40)
    block7a = new Box(700,135,30,40)
    block8a = new Box(730,135,30,40)

    //third
    block9a = new Box(700,95,30,40)

    slingshot = new SlingShot(this.ball,{x:100,y:200})
}

function draw()
{
  if(backgroundImg)
  background(backgroundImg)

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display()
  stand1.display()
  stand2.display()
  text("Score: ",score,50,50)
  
  fill("blue")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  fill("green")
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  fill("blue")
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  fill("green")
  block15.display()
  block16.display()

  fill("green")
  block1a.display()
  fill("purple")
  block2a.display()
  block3a.display()
  block4a.display()
  fill("green")
  block5a.display()
  block6a.display()
  fill("purple")
  block7a.display()
  block8a.display()
  fill("blue")
  block9a.display()

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingshot.display()
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block1a.score();
  block2a.score();
  block3a.score();
  block4a.score();
  block5a.score();
  block6a.score();
  block7a.score();
  block8a.score();
  block9a.score();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed()
{
  if(keyCode === 32)
  {
    slingshot.attach(this.ball)
  }
}

async function getBackground()
{
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo') 
    var responseJason = await response.json()
    console.log(responseJason)
    var dt = responseJason.datetime

    var hour = dt.slice(11,13)
    if(hour<=06&&hour>=19)
    {
        bg = "Day.jpg"
    }
    else
    {
        bg = "Night.jpg"
    }
    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}