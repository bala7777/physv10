const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ball
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var options = {
        restitution:2
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle(200,100,21,options);
    World.add(world,ball);
    console.log(ball);   
    console.log(ground);

}
function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,21,21);
}