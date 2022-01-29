leftWristx = 0;
rightWristx = 0;
difference = 0;


function setup(){
video = createCapture(VIDEO);
video.size(400, 300);

canvas = createCanvas(400, 300);
canvas.position(420, 150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("Yellow");
textSize(difference);
fill("#FFE787");
text('Naman', 50, 400)
}

function modelLoaded(){
console.log("poseNet is intialized");
}

function gotPoses(results){
if(results.length > 0){

console.log(results);

leftWristx = results[0].pose.leftWrist.x;
rightWristx = results[0].pose.rightWrist.x;
difference = floor(leftWristx - rightWristx);


}
}
