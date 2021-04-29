var img;

function preload(){
  img = loadImage('snowman.jpg')
}

function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
}

function draw() {
  background(220);
  image(img,0,0);
  loadPixels();
 redOut();
  updatePixels();
}
function redOut(){
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++){
      var i = (x + y*width)*4;
      pixels[i] = 0
    }
  }
}
function greenOut(){
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++){
      var i = (x + y*width)*4;
      pixels[i+1] = 0
    }
  }
}
function blueOut(){
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++){
      var i = (x + y*width)*4;
      pixels[i+2] = 0
    }
  }
}  
