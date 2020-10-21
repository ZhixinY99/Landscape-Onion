// let onion_sprite_sheet;
// let oniondata;
// let onionAnimation;
// let onion;
let cloud;
let cloud2;
let cloud3;
let cloud4;

const onion_frames = [
  {'name':'player_walk01', 'frame':{'x':0, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk02', 'frame':{'x':32, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk03', 'frame':{'x':64, 'y': 0, 'width': 32, 'height': 32}},
  {'name':'player_walk04', 'frame':{'x':96, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk05', 'frame':{'x':71, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk06', 'frame':{'x':142, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk07', 'frame':{'x':213, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk08', 'frame':{'x':284, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk09', 'frame':{'x':213, 'y': 95, 'width': 32, 'height': 32}},
  // {'name':'player_walk10', 'frame':{'x':355, 'y': 0, 'width': 32, 'height': 32}},
  // {'name':'player_walk11', 'frame':{'x':284, 'y': 95, 'width': 32, 'height': 32}}
];

function preload(){
  onion_sprite_sheet = loadSpriteSheet('onion/onion.png', 32, 32, 6);

  onionAnimation = loadAnimation(onion_sprite_sheet);
  onion = createSprite(300, 500, 32, 32);

  cloud = loadImage('cloud.png');
  cloud2 = loadImage('cloud.png');
  cloud3 = loadImage('cloud.png');
  cloud4 = loadImage('cloud.png');

  
}

function setup(){
  createCanvas(1000, 1000);
  onion.addAnimation('onion', onionAnimation);

  onion.scale = 3.0;

}

function draw(){
  background(103, 192, 219);
  //  animation(onionAnimation, width/2, height/2);
  drawSprites();
  image(cloud, 300, 600, 300, 200);
  image(cloud2, 100, 200, 400, 200);
  image(cloud3, 200, 10, 350, 200);
  image(cloud4, 400, 300, 500, 300);

}


function keyPressed(){
  if(key === 'a'){
    onion.setSpeed(-1, 0)
  }
}