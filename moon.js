/*
 *write a  drawTarget() function makes it easy to draw many distinct 
 *targets. Each call to drawTarget() should specify the position, size, and number of
 *rings for each target.
*/

let img;
let img2;
let imgMask;
let xfactor;
let xalpha;
let xsize;

function preload() {
  img = loadImage('assets/stars.jpg');
  img2 = loadImage('assets/moon.jpg');
  imgMask = loadImage('assets/maskMoon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  img.mask(imgMask);
  imageMode(CENTER);
  noStroke();
  xfactor = windowWidth;
  // noLoop();
  // 

}

function draw() {
  // var w = width;
  // var h = height;
  // var r = windowWidth * 0.25;

  //this code draws one target with 8 rings
  // let size = width*.1;
  background(51);
  // translate(width*.5,height*.5);
  // myFun(width*.5,height*.5,100,20);
  myFun(width*.5, height*.5, xsize,100);
  
  
  
    // ellipse(width*.5, height*.5, size - i*steps, size - i*steps);

// fill(0, 200);
// noStroke();
// background(0);
tint(255,xalpha);
image(img2, width*.5, height*.5);
tint(100);
  image(img, width*.5, height*.5);
  // image(img, mouseX, mouseY);


  xfactor -= 10;
if (xfactor < -1500){
  xfactor = width+1500;
}

// xalpha = map(xfactor, 0, width, 0, 200);

if (xfactor > width*.5+100){
  xalpha = map(xfactor, width*.5+100, width, 40, 0);
} else if (xfactor < width*.5-100){
  xalpha = map(xfactor, 0, width*.5-100, 0, 40);
} else if (xfactor > width*.5 && xfactor < width*.5+100){
  xalpha = map(xfactor, width*.5, width*.5+100, 127, 40);
} else if (xfactor < width*.5 && xfactor > width*.5-100){
  xalpha = map(xfactor, width*.5-100, width*.5, 40, 127);
}

if (xfactor > width*.5){
  xsize = map(xfactor, width*.5, width, 400, 800);
} else if (xfactor < width*.5){
  xsize = map(xfactor, 0, width*.5, 800, 400);
}


// beginShape();
//   // draw rectangle here
//     vertex(0, 0);
//     vertex(width, 0);
//     vertex(width, height);
//     vertex(0, height);
//   beginContour();
//     // draw triangle here
//      vertex(0, -r)
//     quadraticVertex(r, -r, r, 0);7
//     quadraticVertex(r, r, 0, r);
//     quadraticVertex(-r, r, -r, 0);
// quadraticVertex(-r, -r, 0, -r);
//   endContour();
// endShape();


  }


function myFun(x,y,size,rings){
  // size = width/rings;
  
  let steps = size/rings;
  let grayvalues = 255/rings;
  // let locX= ;
  for (i = 0; i < rings; i++) {
    fill(i*grayvalues);
    let x1 = map(xfactor, 0, width, -5000, 5000);
    let locX = (i/rings)*x1;
    // let locY = (i/rings)*mouseY;
    // ellipseMode(CENTER);
  ellipse(locX+x,y, size - i*steps, size - i*steps);
}
}
