
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
  c.pos.x += 1;
  c.pos.y += 2;
  return c;
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}
