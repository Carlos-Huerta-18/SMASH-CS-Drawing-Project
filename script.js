var p5Canvas;
var myName;


function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Carlos"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!

function draw() {
  // Example. You can remove when you're ready!
  background(0,0,255); // try changing this to a blue background
  fill('white');    // Always call fill() before the shape you want to fill in.
  ellipse(400, 400, 150, 150);
  ellipse(400, 300, 100, 100);
  ellipse(400, 220, 75, 75);
  fill(12,246,207);
  rect(0,475,900,200);
  fill('white');
  line(450,300,500,250);
  line(350,300,300,250);
  fill('black');

}
