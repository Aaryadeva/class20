var mObject,fObject
function setup() {
  createCanvas(800,400);
  fObject=createSprite(400, 200, 50, 100);
  mObject=createSprite(750,180,100,50);
  fObject.shapeColor="green";
  mObject.shapeColor="green";
  fObject.debug=true;
  mObject.debug=true;
}

function draw() {
  background(255,255,255);
  mObject.y=mouseY;
  mObject.x=mouseX; 
  console.log(mObject.x) ;
  console.log(mObject.width/2+fObject.width/2);
  console.log(mObject.x-fObject.x);
  if(mObject.x-fObject.x<mObject.width/2+fObject.width/2&&
    fObject.x-mObject.x<mObject.width/2+fObject.width/2&&
    mObject.y-fObject.y<mObject.height/2+fObject.height/2&&
    fObject.y-mObject.y<mObject.height/2+fObject.height/2 )
  {
    fObject.shapeColor="red";
    mObject.shapeColor="red";
  }
  else{
    fObject.shapeColor="green";
    mObject.shapeColor="green";
  }
  drawSprites();
}