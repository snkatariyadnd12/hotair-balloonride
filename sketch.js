var balloon,background;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
 // database=firebase.database();
 // console.log(database)
  createCanvas(1500,700);

  balloon=createSprite(100,450,20,20);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  
}


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10
    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10
    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10
    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10
    //write code to move air balloon in down direction
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function mousePressed(){
  if(keyDown(UP_ARROW))
  balloon.y = 1
  balloon.velocityY = 1

  if(keyDown(LEFT_ARROW))
  balloon.x = 1
  balloon.velocityX = 1

  if(keyDown(RIGHT_ARROW))
  balloon.x = -1
  balloon.velocityX = 1

  if(keyDown(DOWN_ARROW))
  balloon.y = -1
  balloon.velocityY = 1

}