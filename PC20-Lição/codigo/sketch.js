
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var angle = 60;
var poly;

var estrutura;

var bola;
var quadrado;
var retangulo;

//ellipse

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  Engine.update(engine);
   
   var estrutura_options = {
     isStatic: true
   };
   
   var bola_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0
   }

   var quadrado_options = {
    restitution: 0.7,
    friction: 0.01,
    frictionAir: 0.1
   }

   var retangulo_options = {
    restitution: 0.01,
    friction: 1,
    frictionAir: 0.3
   }

  estrutura = Bodies.rectangle(200,390,400,20,estrutura_options);
  World.add(world,estrutura);

  bola = Bodies.circle(200,40,20,bola_options);
  World.add(world,bola);
  
  quadrado = Bodies.rectangle(110,50,10,20,quadrado_options,rect);
  World.add(world,quadrado);
  
  retangulo = Bodies.rectangle(330,50,10,21,retangulo_options,rect);
  World.add(world,retangulo);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(55);
  Engine.update(engine);

  ellipse(bola.position.x, bola.position.y,20);

  rect(quadrado.position.x, quadrado.position.y,30, 20);

  rect(retangulo.position.x, retangulo.position.y,40, 20);

  rect(estrutura.position.x, estrutura.position.y,400,20);
}
