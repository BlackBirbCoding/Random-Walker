class Walker {
  constructor(x, y) {
  	// x and y location of the walker.
    this.x = x;
    this.y = y;
  }

  walk() {
  	/*
  	Random x and y speed. Decides the direction of walk.
  	Possible values for xspeed and yspeed :- -1, 0, 1

    (0, 0)   -: Same place
    (0, -1)  -: North (Up)
    (1, -1)  -: North-east (Top right)
    (1, 0)   -: East (Right)
    (1, 1)   -: South-east (Botton right)
    (0, 1)   -: South (Down)
    (-1, 1)  -: South-west (Bottom left)
    (-1, 0)  -: West (Left)
    (-1, -1) -: North-west (Top left)
    */

    let xspeed = floor(random(-1, 2));
    let yspeed = floor(random(-1, 2));
    
    //Change x and y by the speeds.
    this.x += xspeed;
    this.y += yspeed;
  }

  show() {
  	// Drw the Walker.
  	stroke(0, 255, 50);
    noFill();

    point(this.x, this.y);
  }
}
