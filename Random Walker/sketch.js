/************************************************************|
| Created by BlackBirb Coding (using p5.js library)          |
|                                                            |
| [https://www.youtube.com/channel/UCCG5RqlSv7zOssHUPjQhcpA] |
|                                                            |
|Youtube video:                                              |
|                                                            |
|************************************************************/

// Define walkler variable.
let walker;

function setup() {
  createCanvas(450, 450);
  background(50);
  
  // Initialize walker as a new Walker object.
  walker = new Walker(width/2, height/2);
}

function draw() {
  // Call the show() and walk() functions of Walker object.
  walker.show();
  walker.walk();
}