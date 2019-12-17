var circle = {
	x: 1,
	y: 100,
	radiues: 100,
	speed: 3
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	
}

function draw() {
	background(199,13,1)
	  noStroke()
	 fill(155, 100, 200)
	 
	 
	 ellipse(circle.x, circle.y, circle.radiues, 100)
	 if(circle.x >= windowWidth || circle.x <= 0){
		 circle.speed = - circle.speed
	 }
	 circle.x += circle.speed
	 
	 
	 
}

