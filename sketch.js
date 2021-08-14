var garden,rabbit;
var gardenImg,rabbitImg;
var apples,orangeLeaves;
var appleImg,orangeLeaf;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeLeaf = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
  //background
  garden=createSprite(200,200);
  garden.addImage("gradenImage",gardenImg);

  //creating running rabit
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage("runningRabit",rabbitImg);
}

function draw() {
  background(0);
  
  //making rabbit collide with the edges
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //making rabbit move with mouse curser
  rabbit.x = mouseX;

  select_sprites = Math.round(random(1,3));

  //making the apples and leaves spawn at different positions
  if(frameCount%60 === 0){
    if(select_sprites === 1){
      //calling function createApples
      createApples();
    }
    else{
      //calling fundtion createLeaves
      createLeaves();
    }
  }

  drawSprites();
}

function createApples(){
  
  apples = createSprite(600,100,40,10);
  apples.velocityY = 3;
  apples.addImage("apple",appleImg);
  apples.scale = 0.1;
  apples.x = Math.round(random(10,400));
  apples.depth = rabbit.depth;
  rabbit.depth++;
  
  
}

function createLeaves(){

  orangeLeaves = createSprite(600,100,40,10);
  orangeLeaves.velocityY = 3;
  orangeLeaves.addImage("orangeLeafImg",orangeLeaf);
  orangeLeaves.scale = 0.1;
  orangeLeaves.x = Math.round(random(10,400));
  orangeLeaves.depth = rabbit.depth;
  rabbit.depth++;
  
}

