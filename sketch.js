let snowmanX = 80;
let speed = 2;

let isMoving = false;
let clickCount = 0;

let snowScale = 1;


function setup() {
var myCanvas=createCanvas(480,320)
  myCanvas.parent("mySketch");
  noStroke();
  snowColor = color(255);
}

function draw() {
  background(40, 70, 100);

  fill(220);
  ellipse(90, 80, 50, 30);
  ellipse(110, 70, 40, 25);
  ellipse(130, 80, 50, 30);

  ellipse(270, 105, 50, 30);
  ellipse(290, 95, 40, 25);
  ellipse(310, 105, 50, 30);

  ellipse(450, 70, 50, 30);
  ellipse(470, 60, 40, 25);
  ellipse(490, 70, 50, 30);

  fill(255);
  ellipse(60, 50, 3);
  ellipse(120, 90, 4);
  ellipse(180, 40, 2);
  ellipse(240, 70, 5);
  ellipse(300, 30, 3);
  ellipse(360, 85, 4);
  ellipse(420, 55, 2);
  ellipse(480, 95, 5);
  ellipse(540, 45, 3);
  ellipse(580, 80, 4);

  ellipse(80, 140, 3);
  ellipse(150, 160, 4);
  ellipse(220, 130, 2);
  ellipse(290, 170, 5);
  ellipse(360, 150, 3);
  ellipse(430, 180, 4);
  ellipse(500, 140, 2);
  ellipse(560, 165, 4);

  fill(240);
  rect(0, 340, width);

 
  if (isMoving === true) {
    snowmanX = snowmanX + speed;
    
    if(snowmanX > width){
      snowmanX = -10;
    }
  }

  fill(snowColor);
  ellipse(snowmanX, 310, 60); 
  
  ellipse(snowmanX, 270, 40); 
  fill(0);
  ellipse(snowmanX - 8, 265, 5);
  ellipse(snowmanX + 8, 265, 5);

  fill(255, 140, 0);
  triangle(
    snowmanX + 5, 272,
    snowmanX + 5, 278,
    snowmanX + 22, 275
  );
}

function mouseClicked() {
  clickCount = clickCount + 1;

  if (clickCount === 1) {
    isMoving = true;
  } else {
    snowColor = color(random(255), random(255), random(255));
  }
  
  
}
