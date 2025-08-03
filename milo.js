function setup() {
  createCanvas(200, 200); 
  background(255, 153, 214);
}
function draw() {
//guidelines
//strokeWeight(0.5);
//line(100,0,100,200);
//line(0,100,200,100);

drawMilo();


}
  
function drawMilo () {
  //my lovely menace dog
  
  //head position
let headX = 100;
let headY = 100;
//eye position
let eyeY = headY - 10;
let eyeSize = 15;
let shineSize = 5

//head
stroke(82, 67, 56)
strokeWeight(2);
fill(238, 228, 214);
circle(headX, headY,100);


//left ear
strokeWeight(2);
fill(238, 228, 214);
triangle(40, 60,  90, 40, 65, 90)

//right ear
strokeWeight(2);
fill(238, 228, 214);
triangle(160, 60,  110, 40, 135, 90)

  
//left eye
fill(82, 67, 56);
ellipse(headX - 15, eyeY, eyeSize, eyeSize)

//right eye
fill(82, 67, 56);
ellipse(headX + 15, eyeY, eyeSize, eyeSize) 
//eyeshines
strokeWeight(0)
fill(255, 255, 255);
ellipse(headX + 20, eyeY - 2, shineSize, shineSize)
ellipse(headX - 10, eyeY - 2, shineSize, shineSize)

//nose
strokeWeight(0)
fill(82, 67, 56);
triangle(90, 105,  110, 105, 100, 115)

//mouth
strokeWeight(2)
//right
line(100, 120, 110, 125)
line(110, 125, 115, 120)
//left
line(100, 120, 90, 125)
line(90, 125, 85, 120)
//tongue
strokeWeight(5)
stroke(227, 127, 177)
line(100, 123, 100, 125)
}


