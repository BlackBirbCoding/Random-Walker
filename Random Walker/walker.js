class Walker {
  
  constructor(x, y) {
  	// x and y location of the walker.
  	this.x = x;
  	this.y = y;
  }
  
  walk() {
  	// Random x and y speed. Decides the direction of walk.
  	// Possible values for xspeed and yspeed :- -1, 0, 1
    let xspeed = floor(random(-1, 2));
    let yspeed = floor(random(-1, 2));
    
    //Change x and y by the speeds.
    this.x += xspeed;
    this.y += yspeed;
  }

  show() {
  	// Draw a point
  	stroke(0, 100, 200);
    point(this.x, this.y);
  }
}