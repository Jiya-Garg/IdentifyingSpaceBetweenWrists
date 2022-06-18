function setup() {
    video = createCapture(VIDEO);
    video.size(700, 700);
    video.position(500, 300);
    canvas = createCanvas(700, 700);
    canvas.position(1800, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('Model has been Loaded!')
}
noseX = 0;
noseY = 0;
leftWristx = 0;
rightWristx = 0;
difference = 0;
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log(" noseX = " + noseX + " noseY = " + noseY);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}
function draw() {
    background("#ffff99");
    fill("#000066");
    stroke("#000066");
    square(noseX, noseY, difference);
}