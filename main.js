Webcam.set({
    width : 350,
    height : 300,
    image_format :'png',
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_sanpshot()
{
    Webcam.snap(function(){
        document.getElementById("result").innerHTML = '<img id="catured_image" src="'+data_uri+'"/>';
    });

}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uNiRovsKX/", modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}