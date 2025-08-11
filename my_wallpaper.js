//your parameter variables go here!

 //spanish tennis balls
let unotennisX = 50;
let unotennisY = 130;
let dostennisX = 150;
let dostennisY = 170;
//milo head position
let headX = 100;
let headY = 50;
//eye position
let eyeY = headY - 10;
let eyeSize = 15;
let shineSize = eyeSize - 10;  


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  //DEVELOP_GLYPH
  //GLIDE_WALLPAPER
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(13, 16, 41); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//background checkers
fill(44, 49, 89)
strokeWeight(0);
square(0, 0, 100);
square(100, 100, 100);


drawMilo(headX, headY);
drawTennis(unotennisX, unotennisY);
drawTennis(dostennisX, dostennisY);


}

 function drawTennis(tennisX, tennisY) {

  fill(97, 204, 35);
  strokeWeight(1);
  stroke(97, 204, 35);
  circle(tennisX, tennisY, 30);

  stroke(255, 255, 255);
  strokeWeight(1);
  noFill();
  arc(tennisX + 15, tennisY - 15, 30, 30, 90, 180);
  arc(tennisX - 15, tennisY + 15, 30, 30, 270, 360);
 }

function drawMilo (headX, headY) {
//my lovely menace dog


//head
stroke(82, 67, 56);
strokeWeight(1);
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




