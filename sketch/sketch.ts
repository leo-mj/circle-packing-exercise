
let circlesArray: Circle[] = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCirclesArray();
  loop();
  
}

function createCirclesArray() {
  circlesArray = calculatePackedCircles(windowWidth, windowHeight);
}



function draw() {
  moveAllCircles()
  background('white');
  let i = 0;
  for (const c of circlesArray) {
    fill(palette[i]);
    if (i < 4) {
      i++;
    } else {
      i = 0;
    }
    drawCircle(c);
  }
}

const palette = [
  "#f8b195",
  "#f67280",
  "#c06c84",
  "#6c5b7b",
  "#355c7d"
];

function drawCircle(c: Circle) {

  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// moves each circle
function moveAllCircles() {
  circlesArray = circlesArray.map(move);
}

function move(c: Circle) {
  moveX(c);
  moveY(c);
  return c;
}

function moveX(c: Circle) {
  if (c.pos.x <= windowWidth) {
    c.pos.x += 1;
  } else {
    c.pos.x = random(0, windowWidth/3);
  }
  return c;
}

function moveY(c: Circle) {
  if (c.pos.y <= windowHeight) {
    c.pos.y += 3;
  } else {
    c.pos.y = random(0, windowHeight/3);
  }
  return c;
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
