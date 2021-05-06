var car,wall;
var speed,weight;


function setup() {
  createCanvas(800,400);
  car=createSprite(200, 200, 50, 50);
  car.shapeColor="red"
  wall=createSprite(750,200,30,150);
  wall.shapeColor="red"
  
speed=random(50,90);
weight=random(400,1500);
car.velocityX=speed;


}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<car.width/2+wall.width/2){

    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
    }
    if(deformation>80&&deformation<180){
      car.shapeColor=color(250,100,100);
    }
if(deformation<100){
  car.shapecolor=color(0,255,0);
}
drawSprites()
  }




/* if(isTouching(car,wall)){
  //msquare.shapeColor="green"
  wall.shapeColor="green"
 }
 else{
  //msquare.shapeColor="red"
  wall.shapeColor="red"
 }*/
 //bounceoff(car,wall);

}







