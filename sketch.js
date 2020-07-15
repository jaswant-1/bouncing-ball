const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);
var ball1 = {
    restitution:1
}
    ball = Bodies.circle(200,200,30,ball1)
    World.add(world,ball);


    ball2 = Bodies.circle(100,200,30,ball1);
    World.add(world,ball2)
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("orange")
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,30,30);
    ellipse(ball2.position.x,ball2.position.y,30,30);
}