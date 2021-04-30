
 //let noiseOffset = 0.0;
let strokeWidth = 5;
let array = [];
let backgroundColor = 200;


function setup() {
  createCanvas(700, 700);
  //background(backgroundColor);

  drawGrid();
  noFill();



}

function draw() {

    if (mouseIsPressed) {
      background -= 5;
      background(backgroundColor);
      array.push([mouseX, mouseY]);
    }
      beginShape();
      for (let i = 0; i < array.length; i++) {
        curveVertex(array[i][0], array[i][1])
      }
      endShape();

    //  background(32, 252, 3, 20);
      strokeWeight(strokeWidth);

    //  noiseOffset += 0.05;
    //  strokeWidth = noise(noiseOffset) * 100;


      stroke(map(mouseX, 0, 600, 0, 255, true))
      line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
      line(mouseX, mouseY, pmouseX, pmouseY);


  }


  function keyTyped() {

    if (key === 'p') {
      //save this image
      saveCanvas('fileName', 'png');
    } else if (key === 'c') {
      // clear the image
      clear();
  } else if (key === 'g'){
    drawGrid();
} else if (key === 'd') {

  background(255);

  beginShape();
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1])
  }
  endShape();
  }


  return false;

  }

  function mousePressed() {
    array = [];
    backgroundColor = 255;
  }

  function drawGrid() {
    numCells = 20;
    fillColor = 255;
  //  noStroke();
  strokeWeight(0);

    for (let i = 0; i <= width; i += width / numCells) {
      for (let j = 0; j <= height; j += height / numCells){
        if (fillColor === 255){
          fillColor = 200;
        } else {
          fillColor = 255;
        }

        fill(fillColor);
       rect(i, j, width / numCells, height / numCells);

      }
    }
    strokeWeight(5);
  }
