var btn_red;
var btn_green;
var r = 0;
var g = 0;
var b = 0;
function setup() {
    btn_red = createButton("click here for Red");
    btn_green = createButton("click here for Green");
    btn_red.position(50,450);
    btn_green.position(175,450); 
    btn_green.mousePressed(setGreen);
    btn_red.mousePressed(setRed)
    createCanvas(400, 400);
}

function draw() {
    background(r,g,b)
}

function setGreen(){
    r = 0;
    g = 255;
    b = 0;
}

function setRed(){
    r = 255;
    g = 0;
    b = 0;
}


