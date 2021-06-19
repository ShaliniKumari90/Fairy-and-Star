var cat,mouse,gardenImg;
var catRunning,catSitting,mouseTeasing,mouseHappy;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catRunning = loadAnimation("images/cat1.png");
    catSitting = loadAnimation("images/cat1.png");
    mouseTeasing = loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseHappy = loadAnimation("images/mouse1.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500,400);
    garden.addImage(gardenImg);
    //create tom and jerry sprites here
    cat = createSprite(650,800,50,50);
    cat.addAnimation("tom sitting",catSitting);
    cat.addAnimation("tom running",catRunning);

    mouse = createSprite(400,800,30,40);
    mouse.addAnimation("jerry teasing",mouseTeasing);
    mouse.addAnimation("jerry happy",mouseHappy);



}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < cat.width/2+mouse.width){
        cat.changeAnimation("tom sitting",catSitting);
        mouse.changeAnimation("jerry happy",mouseHappy);

    }

    drawSprites();
}


function keyPressed(){


//For moving and changing animation write code here

if(keyDown("LEFT_ARROW")){

    mouse.changeAnimation("jerry teasing",mouseTeasing);
    cat.changeAnimation("tom running",catRunning);

}




}
