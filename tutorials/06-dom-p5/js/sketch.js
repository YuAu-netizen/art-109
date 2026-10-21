
let canvas;

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

}

function mouseMove(){
    strokeWeight(0);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(mouseX, mouseY, 30, 30);    
}