var backgroundImg;
var hasDocked = false;
var iss, spacecraft;
var issImg, scImage;

function preload(){
backgroundImg = loadImage("space.jpg");
issImg = loadImage("iss.png");
scImage = loadImage("spacecraft1.png");
scImage2 = loadImage("spacecraft2.png");
scImage3 = loadImage("spacecraft3.png");
scImage4 = loadImage("spacecraft4.png");
}


function setup() {
  createCanvas(600,350);
  iss = createSprite(330,130);
  iss.addImage(issImg)
  iss.scale = 0.25;
  
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scImage);
  spacecraft.scale = 0.15;

}

function draw() {
  background(backgroundImg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    if (keyDown("up_arrow")){
      spacecraft.y = spacecraft.y-3;
    }
    if (keyDown("down_arrow")){
      spacecraft.y = spacecraft.y+3;
      spacecraft.addImage(scImage2);
    }
    if (keyDown("left_arrow")){
      spacecraft.y = spacecraft.y-3;
      spacecraft.addImage(scImage3);
    }
    if (keyDown("right_arrow")){
      spacecraft.y = spacecraft.y+3;
      spacecraft.addImage(scImage4);
    }
  }
if(spacecraft.y <=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
  hasDocked = true;

  text("docking sucessful",200,200);
}


  drawSprites();

}