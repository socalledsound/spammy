
setInterval(trigWindow,3000);

function setup() {
  createCanvas(1200, 1200);
	background(20);
	trigWindow();
}

function mousePressed(){
 //background(20);
  setTimeout(trigWindow, 500);
  setTimeout(trigWindow, 1000);
  setTimeout(trigWindow, 1500);
}



function trigWindow(){
 
  fill(255);
  
  windowX = random(10,width-200);
  windowY = random(0,height-200);
  
  fill(random(120), random(125), random(125));
	rect(windowX, windowY, 140,140);
  fill(255);
  textSize(20);
  text("click to close",windowX+5, windowY+40)
  
  // fill(random(255), random(255), random(255));
  // rect(windowY + 20, windowY+210, 200,70);

  
}


