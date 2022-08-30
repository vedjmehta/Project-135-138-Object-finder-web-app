
function preload() {

}

function setup() {
  canvas = createCanvas(480,380);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide()
}

function draw() {
  image( video, 0, 0, 480, 380);
}


video = "";



function start() {
    objectDetector = ml5.objectDetector('cocossd, modelLoaded');
    document.getElementById("status").innerHTML = "status : Object Detecting";
}

function modelLoaded() {
    console.log("model Loaded!");
    status = true;
   
}
