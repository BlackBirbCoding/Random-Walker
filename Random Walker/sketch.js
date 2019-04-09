/************************************************************|
| Created by BlackBirb Coding (using p5.js library)          |
|                                                            |
| [https://www.youtube.com/channel/UCCG5RqlSv7zOssHUPjQhcpA] |
|                                                            |
|Youtube video:                                              |
|                                                            |
|************************************************************/

// Define Walker
let walker;

function setup() {
  // Create a canvas.
  createCanvas(450, 450);
  // Dark background.
  background(50);
  
  // Initialize walker as a new Walker object.
  walker = new Walker(width/2, height/2);
}

function draw() {
  // Call show and update functions inside Walker class.
  walker.show();
  walker.walk();
}