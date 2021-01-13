var bg,bgImg;

var bbScreen;
var bbScreenImg;
var dScreen;
var dScreenImg;
var sScreen;
var sScreenImg;
var bScreen;
var bScreenImg;

var bb,b,d,s;
var bbImg,bImg,dImg,sImg;

var bbI,bI,sI,dI;
var bbIImg,bIImg,sIImg,dIImg;

function preload(){
    bgImg = loadImage("Images/bg.png");
    
    bbScreenImg = loadImage("Images/BB/download2.png");
    dScreenImg = loadImage("Images/D/download1.png");
    sScreenImg = loadImage("Images/S/download3.png");
    bScreenImg = loadImage("Images/B/download.png");

    bbIImg = loadImage("Images/BB/unnamed.png");
    bIImg = loadImage("Images/B/bowling_PNG10.png");
    sIImg = loadImage("Images/S/1024px-Soccerball.svg.png");
    dIImg = loadImage("Images/D/darts_PNG17.png");
}
function setup(){
    createCanvas(displayWidth,displayHeight - 111);

    bg = createSprite(displayWidth/2,displayHeight/2);
    bg.addImage(bgImg);
    bg.scale = 4.0; 
    
    bbScreen = createSprite(displayWidth - 1250,100);
    bbScreen.addImage(bbScreenImg);
    bbScreen.scale = 3.0;

    dScreen = createSprite(displayWidth - 115,100);
    dScreen.addImage(dScreenImg);
    dScreen.scale = 3.0;

    sScreen = createSprite(displayWidth-1250,displayHeight - 211);
    sScreen.addImage(sScreenImg);
    sScreen.scale = 3.0;

    bScreen = createSprite(displayWidth - 115,displayHeight - 211);
    bScreen.addImage(bScreenImg);
    bScreen.scale = 3.0;

    bbI = createSprite(displayWidth - 1250,140);
    bbI.addImage(bbIImg);
    bbI.scale = 0.2;

    bI = createSprite(displayWidth - 100,578);
    bI.addImage(bIImg);
    bI.scale = 0.03;

    sI = createSprite(displayWidth - 1250,589);
    sI.addImage(sIImg);
    sI.scale = 0.09;

    dI = createSprite(displayWidth - 100,125);
    dI.addImage(dIImg);
    dI.scale = 0.3;
}
function draw(){
    background("white");    
    drawSprites();
    strokeWeight(8);
    stroke("blue");
    fill("cyan");
    textFont("showcard gothic");
    textSize(50);
    text("FOUR IN ONE SPORTS GAME",displayWidth/2 - 300,displayHeight/12);
}