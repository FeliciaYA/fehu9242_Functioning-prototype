// Make a variate to hold the audio file
let song;
//  Make a variate to hold the FFT object
let fft;
let numBins = 64;
let smoothing = 0.8;

// this time we will make a global variable for the button so we can access it in the windowResized function
let button;

// Load sound file before setup() function runs
function preload() {
//audio file from freesound https://freesound.org/people/multitonbits/sounds/383935/?
  song = loadSound("assets/Resuscitated Hope.mp3");
}

// Setting up a canvas with similar proportions to the original
function setup() {
  createCanvas(600, 800); // Ensure that the draw function is run only once

  // Create a new instance of p5.FFT() object
  fft = new p5.FFT(smoothing, numBins);

  song.connect(fft);

  // Add a button for play/pause
  button = createButton("Play/Pause");

  // set the position of the button to the bottom center
  button.position((width - button.width) / 2, height - button.height - 2);

  // Run the play_pause function when the button is pressed
  button.mousePressed(play_pause);
}

function draw() {
  randomSeed(99);

  // Create a black background
  background(0);

  // Create a rough hand-drawn effect
  for (let i = 0; i < 8500; i++) {
    let x = random(width);
    let y = random(height);
    let length = noise(x * 0.02, y * 0.02) * 20;
    let angle = noise(x * 0.02, y * 0.02) * TWO_PI;
    let x2 = x + cos(angle) * length;
    let y2 = y + sin(angle) * length;

    // Set the stroke color with transparency
    stroke(255, 255, 200, 90);
    strokeWeight(1);
    line(x, y, x2, y2);
  }

  // Use a rectangle to draw the plane below and something that looks like a flowerpot
  fill(92, 173, 123);
  stroke(0);
  strokeWeight(5);
  rect(0, 600, 600, 85);
  rect(100, 600, 400, 85);

  fill(244, 195, 110);
  strokeWeight(5);
  rect(160, 590, 280, 85);

  fill(92, 173, 123);
  stroke(244, 195, 110);
  rect(250, 595, 50, 80);
  rect(350, 595, 50, 80);

  fill(255, 50, 50);
  rect(205, 595, 45, 80);

  // The analyze() method returns an array of amplitude values across the frequency spectrum
  let spectrum = fft.analyze();

  for (let i = 0; i < numBins; i++) {
    // We divide the spectrum values by 1000
    spectrum[i] = min(0.9 + spectrum[i] / 1000, 1.2);
  }

  // Here are the circles with the colours split vertically  
  fill(255, 50, 50);
  noStroke();
  arc(295, 450, 95 * spectrum[0], 95 * spectrum[0], PI / 2.3, 1.57 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(295, 450, 95 * spectrum[0], 95 * spectrum[0], 1.57 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(300, 515, 40 * spectrum[1], 40 * spectrum[1], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(300, 515, 40 * spectrum[1], 40 * spectrum[1], 1.52 * PI / 1, PI / 2, CHORD);

  fill(92, 173, 123);
  arc(305, 546, 25 * spectrum[2], 25 * spectrum[2], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(305, 546, 25 * spectrum[2], 25 * spectrum[2], 1.4 * PI / 1, PI / 1.7, CHORD);

  fill(255, 50, 50);
  arc(295, 576, 40 * spectrum[3], 40 * spectrum[3], PI / 2.3, 1.7 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(295, 576, 40 * spectrum[3], 40 * spectrum[3], 1.6 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(310, 365, 80 * spectrum[4], 80 * spectrum[4], PI / 1.7, 1.45 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(310, 365, 80 * spectrum[4], 80 * spectrum[4], 1.45 * PI / 1, PI / 1.7, CHORD);

  fill(255, 50, 50);
  arc(305, 280, 20 * spectrum[5], 20 * spectrum[5], PI / 2, 2 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(305, 280, 20 * spectrum[5], 20 * spectrum[5], 1.5 * PI / 1, PI / 2, CHORD);

  fill(92, 173, 123);
  arc(305, 256, 30 * spectrum[6], 30 * spectrum[6], PI / 2, 2 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(305, 256, 30 * spectrum[6], 30 * spectrum[6], 1.5 * PI / 1, PI / 2, CHORD);


  fill(92, 173, 123);
  arc(260, 213, 20 * spectrum[7], 20 * spectrum[7], PI / 1.7, 1.45 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(260, 213, 20 * spectrum[7], 20 * spectrum[7], 1.45 * PI / 1, PI / 1.7, CHORD);


  fill(92, 173, 123);
  arc(365, 218, 23 * spectrum[8], 23 * spectrum[8], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(365, 218, 23 * spectrum[8], 23 * spectrum[8], 1.52 * PI / 1, PI / 2, CHORD);

  fill(92, 173, 123);
  arc(180, 270, 65 * spectrum[9], 65 * spectrum[9], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(180, 270, 65 * spectrum[9], 65 * spectrum[9], 1.52 * PI / 1, PI / 2, CHORD);

  fill(255, 50, 50);
  arc(173, 223, 35 * spectrum[10], 35 * spectrum[10], PI / 2.3, 1.7 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(173, 223, 35 * spectrum[10], 35 * spectrum[10], 1.6 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(180, 198, 20 * spectrum[11], 20 * spectrum[11], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(180, 198, 20 * spectrum[11], 20 * spectrum[11], 1.52 * PI / 1, PI / 2, CHORD);

  fill(92, 173, 123);
  arc(130, 155, 35 * spectrum[12], 35 * spectrum[12], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(130, 155, 35 * spectrum[12], 35 * spectrum[12], 1.52 * PI / 1, PI / 2, CHORD);

  fill(255, 50, 50);
  arc(125, 110, 55 * spectrum[13], 55 * spectrum[13], PI / 2.3, 1.57 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(125, 110, 55 * spectrum[13], 55 * spectrum[13], 1.57 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(130, 60, 45 * spectrum[14], 45 * spectrum[14], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(130, 60, 45 * spectrum[14], 45 * spectrum[14], 1.52 * PI / 1, PI / 2, CHORD);

  fill(255, 50, 50);
  arc(425, 260, 46 * spectrum[15], 46 * spectrum[15], PI / 2.3, 1.57 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(425, 260, 46 * spectrum[15], 46 * spectrum[15], 1.57 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(428, 225, 30 * spectrum[16], 30 * spectrum[16], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(428, 225, 30 * spectrum[16], 30 * spectrum[16], 1.52 * PI / 1, PI / 2, CHORD);

  fill(255, 50, 50);
  arc(425, 195, 38 * spectrum[17], 38 * spectrum[17], PI / 2.3, 1.57 * PI / 1, CHORD);
  fill(92, 173, 123);
  arc(425, 195, 38 * spectrum[17], 38 * spectrum[17], 1.57 * PI / 1, PI / 2.3, CHORD);

  fill(92, 173, 123);
  arc(428, 165, 25 * spectrum[18], 25 * spectrum[18], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(428, 165, 25 * spectrum[18], 25 * spectrum[18], 1.52 * PI / 1, PI / 2, CHORD);

  fill(92, 173, 123);
  arc(532, 150, 25 * spectrum[19], 25 * spectrum[19], PI / 2, 1.52 * PI / 1, CHORD);
  fill(255, 50, 50);
  arc(532, 150, 25 * spectrum[19], 25 * spectrum[19], 1.52 * PI / 1, PI / 2, CHORD);

  //Here are the circles with the colours split horizontally
  fill(255, 50, 50);
  arc(227.5, 595, 40 * spectrum[20], 40 * spectrum[20], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(227.5, 595, 40 * spectrum[20], 40 * spectrum[20], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(265, 595, 25 * spectrum[21], 25 * spectrum[21], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(265, 595, 25 * spectrum[21], 25 * spectrum[21], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(330, 592, 40 * spectrum[22], 40 * spectrum[22], 0.9 * PI, 2.1 * PI, CHORD);
  fill(92, 173, 123);
  arc(330, 592, 40 * spectrum[22], 40 * spectrum[22], 2.1 * PI, 0.9 * PI, CHORD);

  fill(92, 173, 123);
  arc(375, 595, 50 * spectrum[23], 50 * spectrum[23], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(375, 595, 50 * spectrum[23], 50 * spectrum[23], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(330, 303, 45 * spectrum[24], 45 * spectrum[24], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(330, 303, 45 * spectrum[24], 45 * spectrum[24], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(365, 298, 25 * spectrum[25], 25 * spectrum[25], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(365, 298, 25 * spectrum[25], 25 * spectrum[25], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(400, 298, 48 * spectrum[26], 48 * spectrum[26], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(400, 298, 48 * spectrum[26], 48 * spectrum[26], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(340, 240, 45 * spectrum[27], 45 * spectrum[27], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(340, 240, 45 * spectrum[27], 45 * spectrum[27], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(276, 240, 35 * spectrum[28], 35 * spectrum[28], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(276, 240, 35 * spectrum[28], 35 * spectrum[28], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(250, 240, 20 * spectrum[29], 20 * spectrum[29], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(250, 240, 20 * spectrum[29], 20 * spectrum[29], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(160, 170, 35 * spectrum[30], 35 * spectrum[30], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(160, 170, 35 * spectrum[30], 35 * spectrum[30], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(290, 298, 35 * spectrum[31], 35 * spectrum[31], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(290, 298, 35 * spectrum[31], 35 * spectrum[31], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(255, 302, 35 * spectrum[32], 35 * spectrum[32], PI, 0, CHORD);
  fill(92, 173, 123);
  arc(255, 302, 35 * spectrum[32], 35 * spectrum[32], 0, PI, CHORD);

  fill(92, 173, 123);
  arc(220, 298, 38 * spectrum[33], 38 * spectrum[33], PI, 0, CHORD);
  fill(255, 50, 50);
  arc(220, 298, 38 * spectrum[33], 38 * spectrum[33], 0, PI, CHORD);

  fill(255, 50, 50);
  arc(450, 165, 20 * spectrum[34], 20 * spectrum[34], 1.3 * PI, 1.9 * PI, CHORD);
  fill(92, 173, 123);
  arc(450, 165, 20 * spectrum[34], 20 * spectrum[34], 1.9 * PI, 1.3 * PI, CHORD);

  fill(92, 173, 123);
  arc(480, 165, 45 * spectrum[35], 45 * spectrum[35], 1.0 * PI, 2.6 * PI, CHORD);
  fill(255, 50, 50);
  arc(480, 165, 45 * spectrum[35], 45 * spectrum[35], 2.1 * PI, 1 * PI, CHORD);

  fill(255, 50, 50);
  arc(515, 170, 30 * spectrum[36], 30 * spectrum[36], 1 * PI, 2.2 * PI, CHORD);
  fill(92, 173, 123);
  arc(515, 170, 30 * spectrum[36], 30 * spectrum[36], 2.2 * PI, 1 * PI, CHORD);

  //The bottom row of planters needs some semicircles
  stroke(244, 195, 110);
  strokeWeight(3);
  arc(185, 675, 42 * spectrum[37], 42 * spectrum[37], PI, 0, CHORD);
  arc(417, 675, 35 * spectrum[38], 35 * spectrum[38], PI, 0, CHORD);

  fill(244, 195, 110);
  arc(227, 685, 50 * spectrum[39], 50 * spectrum[39], 1.2 * PI, 1.8 * PI, CHORD);
  arc(375, 700, 65 * spectrum[40], 65 * spectrum[40], 1.3 * PI, 1.7 * PI, CHORD);

  fill(255, 50, 50);
  arc(275, 669, 50 * spectrum[41], 50 * spectrum[41], 0.9 * PI, 2.1 * PI, CHORD);
  arc(326, 675, 50 * spectrum[42], 50 * spectrum[42], 1 * PI, 2 * PI, CHORD);


  //Here are all the yellow lines representing the apple tree branches
  stroke(244, 195, 110);
  strokeWeight(5);
  line(305, 240, 300, 600);
  line(180, 300, 430, 300);
  line(180, 170, 180, 300);
  line(430, 155, 430, 300);
  line(129, 170, 180, 170);
  line(245, 240, 365, 240);
  line(260, 240, 260, 205);
  line(365, 210, 365, 240);
  line(430, 155, 530, 180);
  line(530, 140, 530, 180);
  line(305, 240, 300, 600);
  line(129, 170, 129, 50);
  line(165, 595, 435, 595);

  //By looking at the top of the picture 
  //You can see that there is a dark block of colour covering the uppermost circle.
  fill(0);
  noStroke();
  rect(20, 20, 600, 40);

  //This line will cover the yellow stroke inside the planter
  stroke(0);
  line(165, 675, 435, 675);

  //Create a blue-green border
  noFill();
  stroke(148, 200, 200);
  strokeWeight(70);
  rect(0, 0, 600, 800);
}

function play_pause() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    //we can use song.play() here if we want the song to play once
    //In this case, we want the song to loop, so we call song.loop()
    song.loop();
  }
}