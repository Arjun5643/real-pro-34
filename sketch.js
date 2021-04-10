//Create variables here
var dog, happyDog;
var foodS, foodStock;
var database;
var dog_img, happyDog_img;
function preload()
{
  //load images here
  dog_img = loadImage("images/dogImg.png");
  happyDog_img = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog  = createSprite(250,250);
  dog.scale = 0.15;
  dog.addImage(dog_img);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
 background(46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog_img);
 }

  drawSprites();
  //add styles here
   
}

function readStock(data){
  foodS = data.val();
}
function writeStock(data){
  if(foodS<=0){
    foodS=0;
  }
  else{
    foodS = foodS-1;
  }
  database.ref('/').update({
    Food:foodS
  })
}