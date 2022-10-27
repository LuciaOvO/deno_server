document.body.style.margin   = 0
document.body.style.overflow = `hidden`
document.body.style.backgroundImage = "url('giphy.gif')";

var r=40;
var r1=7;
var r2=3;

var d=1;


let extraCnv;

var song;

function preload(){ // set up a preload function  
  // load a sound effect file from Sound folder 
  song = loadSound('SE.mp3'); 
}

function mousePressed () {

  song.play();
  
  }
  

function setup() { 
  createCanvas(innerWidth, innerHeight);
  ellipseMode(RADIUS);
  angleMode(DEGREES);
} 

function draw() { 

  clear ()

  drawFish(mouseX,mouseY,d);
}

  
function drawFish(x1,y1,dir){
  strokeWeight(0); 
   //tail
  fill(255,136,75);
  arc(dir*(x1-35),y1,random(r-7,r-10),r-10,random(dir*90+45,dir*90+50),random(dir*90+130,dir*90+135));
  //tail
  fill(255,136,75);
  arc(dir*(x1-35),y1,random(r-7,r-10),r-10,random(dir*90+45,dir*90+50),random(dir*90+130,dir*90+135));
  
  //body
  fill(147,125,194);
  // fill(254,206,112);
  ellipse(x1,y1,r+10,r-7);
  //mouth
  strokeWeight(2);
  stroke(255,87,127);
  curve(dir*(x1+40),y1-20,dir*(x1+30),y1+12,dir*(x1+20),y1+10,dir*(x1+25),y1);
  //dots
  fill(255,211,132);
  strokeWeight(0);
  ellipse(dir*(x1+10),y1,r1,r1);
  //eyes
  strokeWeight(0);
  fill(255);
  ellipse(dir*(x1+20),y1-5,r1,r1);
    //eyeball
  fill(0);
  ellipse(dir*(x1+22),y1-5,r2,r2);
}