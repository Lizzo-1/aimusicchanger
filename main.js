song = ""; 
song2 ="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function preload() 
{ song = loadSound("music.mp3"); 
song2 = loadSound("music2.mp3"); 

}
function setup()
 { canvas = createCanvas(600, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function draw() 
{ image(video, 0, 0, 600, 500);
}
function modelLoaded(){
console.log('PoseNet is initialized!')
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWritX=" + leftWristx+ "leftWristY="+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWritX=" + rightWristx+ "rightWristY="+rightWristY);
}
}
