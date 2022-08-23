function preload()
{
    
}

function setup()
{
    canvas = createCanvas(800, 600);
    canvas.position(390, 140);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 200, 150, 400, 300);
    fill('red');
    stroke('red');
    circle(50, 50, 50);
    circle(750, 50, 50);
    circle(50, 550, 50);
    circle(750, 550, 50);
    fill('yellow');
    stroke('yellow');
    rect(75, 40, 650, 20);
    rect(40, 75, 20, 450);
    rect(75, 540, 650, 20);
    rect(740, 75, 20, 450);
}