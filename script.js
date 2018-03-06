let toggle = 0;
let drawing = true;
let shape = 'rect';
let size = 80;

function setup() {
  createCanvas(640, 480);
  const canvas = $('#defaultCanvas0')
  canvas.css({'position': 'fixed', 'left': (($(window).width()/2) - (canvas.width()/2)) + 'px',  'border': '.2rem solid grey'});
}
function draw(){
  if(drawing){
    if(shape == 'rect'){
      rect(mouseX-(size/2), mouseY-(size/2), size, size);
    }
    else{
      ellipse(mouseX, mouseY, size, size);
    }
  }
}
function keyPressed(){
  const pen = $('.pen');
  const colorDiv = $('.color');
  const shapeDiv = $('.shape');
  const sizeDiv = $('.size');
  if(key == ' '){
    toggle++;
    toggle %= 5;
    if(toggle == 0){
      fill(255);
      colorDiv.css({'color': 'black'});
      colorDiv.html('White');
    }
    else if(toggle == 1){
      fill('blue');
      colorDiv.css({'color': 'blue'});
      colorDiv.html('Blue');
    }
    else if(toggle == 2){
      fill('red');
      colorDiv.css({'color': 'red'});
      colorDiv.html('Red');
    }
    else if(toggle == 3){
      fill('green');
      colorDiv.css({'color': 'green'});
      colorDiv.html('Green');
    }
    else if(toggle == 4){
      fill('yellow');
      colorDiv.css({'color': 'yellow'});
      colorDiv.html('Yellow');
    }
  }
  else if(keyCode == SHIFT){
    drawing = !drawing;
    if(drawing){
      pen.html('Pen on');
    }
    else{
      pen.html('Pen off');
    }
  }
  else if(keyCode == CONTROL){
    if(shape == 'rect'){
      shape = 'ellipse';
      shapeDiv.html('Circle');
    }
    else{
      shape = 'rect';
      shapeDiv.html('Square');
    }
  }
  else if(key == 'Q'){
    size -= 10;
    if(size<0){
      size = 0;
    }
    sizeDiv.html(size + 'px');
  }
  else if(key == 'E'){
    size += 10;
    if(size>500){
      size = 500;
    }
    sizeDiv.html(size + 'px');
  }
}
