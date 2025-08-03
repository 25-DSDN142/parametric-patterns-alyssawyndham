function setup() {
  createCanvas(200, 200); 
  background(255, 153, 214);
   angleMode(DEGREES);


}
function draw() {
//background checkers
fill(255, 212, 238)
strokeWeight(0);
square(0, 0, 100);
square(100, 100, 100);

 //spanish tennis balls
let unotennisX = 30;
let unotennisY = 30;
let dostennisX = 170;
let dostennisY = 175;
//milo head position
let headX = 100;
let headY = 100;
//eye position
let eyeY = headY - 10;
let eyeSize = 20;
let shineSize = eyeSize - 10;  


drawMilo(headX, headY);
drawTennis(unotennisX, unotennisY);
drawTennis(dostennisX, dostennisY);


}
 function drawTennis(tennisX, tennisY) {

  fill(97, 204, 35);
  strokeWeight(0);
  circle(tennisX, tennisY, 30);

  stroke(255, 255, 255);
  strokeWeight(1);
  noFill();
  arc(tennisX + 15, tennisY - 15, 30, 30, 90, 180);
  arc(tennisX - 15, tennisY + 15, 30, 30, 270, 360);
 }

function drawMilo (headX, headY) {
//my lovely menace dog

//eye position
let eyeY = headY - 10;
let eyeSize = 15;
let shineSize = eyeSize - 10;

//head
stroke(82, 67, 56);
strokeWeight(2);
fill(238, 228, 214);
circle(headX, headY,100);


//left ear
strokeWeight(2);
fill(238, 228, 214);
triangle(headX - 60, headY - 40,  headX - 10, headY - 60, headX - 35, headY - 10);

//right ear
strokeWeight(2);
fill(238, 228, 214);
triangle(headX + 60, headY - 40,  headX + 10, headY - 60, headX + 35, headY - 10);

  
//left eye
fill(82, 67, 56);
ellipse(headX - 15, eyeY, eyeSize, eyeSize);

//right eye
fill(82, 67, 56);
ellipse(headX + 15, eyeY, eyeSize, eyeSize) ;
//eyeshines
strokeWeight(0);
fill(255, 255, 255);
ellipse(headX + 20, eyeY - 2, shineSize, shineSize);
ellipse(headX - 10, eyeY - 2, shineSize, shineSize);

//nose
strokeWeight(0);
fill(82, 67, 56);
triangle(headX - 10, headY + 5,  headX + 10, headY + 5, headX, headY + 15);

//mouth
strokeWeight(2);
//right
line(headX, headY + 20, headX + 10, headY + 25);
line(headX + 10, headY + 25, headX + 15, headY + 20);
//left
line(headX, headY + 20, headX - 10, headY + 25);
line(headX - 10, headY + 25, headX - 15, headY + 20);

function drawTongue() {
  //tongue
strokeWeight(5);
stroke(227, 127, 177);
line(headX, headY + 23, headX, headY + 25);
}
if(mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <=150) {
  drawTongue();
}
}


