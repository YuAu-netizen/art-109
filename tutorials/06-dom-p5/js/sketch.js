
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .5

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    // background(125);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

   drawThing(xPos, yPos);
}

function mouseMoved(){

}

function drawThing(_x, _y){
    // draw eye
    strokeWeight(1);
    fill(225);
    ellipse(_x, _y, 30, 30);    
    ellipse(_x - 20, _y + 5, 30, 30);

    // draw pupils
    strokeWeight(2);
    fill(0);
    ellipse(_x - 3, _y + 1, 5, 5);    
    ellipse(_x - 10, _y + 3, 5, 5);
}