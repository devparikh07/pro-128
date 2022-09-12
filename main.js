song1="";
song2="";
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
  
}

function setup(){
    video = createCapture(VIDEO);
    video.hide();
  
   canvas = createCanvas(500,400);
   canvas.position(400,180)

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
    
    song_1_Status=song1.isPlaying();
    song_2_Status=song2.isPlaying();

   }

function modelLoaded(){
    console.log("Posenet is initialized");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left wrist Y = "+leftWristY+ "left wrist X = "+leftWristX);
       
  

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right wrist Y = "+rightWristY+ "right wrist X = "+rightWristX)

    }
}

function play()
{

    song2.play();
    //mam  dono sound mix na ho is liye mene ek song rakha he//
}