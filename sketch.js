const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ballobject;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    

    ballobject = new Ball(200,100,10);
    ballobject1 = new Ball(10,10,5);
    
}

function draw(){
    background(0);

    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ballobject.display();
    ballobject1.display();
}