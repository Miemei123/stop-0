var toggle = true;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
}

function draw() {
//Modify the value of toggle based on a mouse click
if(mouseIsPressed === true){
  toggle = !toggle;
//Show different background colors based on the value of toggle
		background(1, 186, 240);
	}else{
		background(250, 150, 50);
	}

// declare the variable
	var x = width / 2;
	var y = height / 2;
	var size = 200;

	if(frameCount < 60){
		size = size + frameCount;
	}else{
		size = size + 60;
	}

//circle
	fill(237, 34, 93);
	noStroke();
	ellipse(x, y, size, size);

//rectangle
	fill(255);
	rect(x, y, size*0.75, size*0.15);
}

function mousePressed(){
	toggle = !toggle;
}
