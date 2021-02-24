
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var Slingshot, polygon

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=new Polygon(200,50)
    box1=new Box(300,275,30,40);
    box2=new Box(330,275,30,40);
    box3=new Box(360,275,30,40);
    box4=new Box(390,275,30,40);
    box5=new Box(420,275,30,40);
    box6=new Box(450,275,30,40);
    box7=new Box(480,275,30,40);
    box8=new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box10=new Box(390,235,30,40);
    box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);
    box13=new Box(360,195,30,40);
    box14=new Box(390,195,30,40);
    box15=new Box(420,195,30,40);
    box16=new Box(390,155,30,40);

    box17=new Box(150,275,30,40);
    box18=new Box(180,275,30,40);
    box19=new Box(210,275,30,40);
    box20=new Box(240,275,30,40);
    box21=new Box(270,275,30,40);
    box22=new Box(300,275,30,40);
    box23=new Box(330,275,30,40);
    box24=new Box(180,235,30,40);
    box25=new Box(210,235,30,40);
    box26=new Box(240,235,30,40);
    box27=new Box(270,235,30,40);
    box28=new Box(300,235,30,40);
    box29=new Box(210,195,30,40);
    box30=new Box(240,195,30,40);
    box31=new Box(270,195,30,40);
    box32=new Box(240,155,30,40);


    ground = new Ground(600,height,1200,20);
    ground2 = new Ground(600,height,600,80)
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    ground2.display();
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()
    box31.display()
    box32.display()



    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}