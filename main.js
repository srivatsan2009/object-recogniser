Webcam.set({
width:350,
height:300,
image_format:'jpg',
jpg_quality:100
});

camera=document.getElementById("camera");
Webcam.attach("camera");

function takepic() {
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="captured_pic" src="'+data_url+'">';
});
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mNA6k0KTr/model.json",model_loaded);

function model_loaded() {
console.log("model loaded!");
}

function check() {
img=document.getElementById("captured_pic");
classifier.classify(img,check_result);
}

function check_result(error,result) {
if (error) {
console.log(error);
}
else {
console.log(result);
document.getElementById("result_emotion_name").innerHTML=result[0].label;
document.getElementById("result_emotion_name2").innerHTML=result[1].label;
if (result[0].label=="happy") {
document.getElementById("update_emoji").innerHTML="&#128522;";
}
if (result[0].label=="sad") {
document.getElementById("update_emoji").innerHTML="&#128532;";
}
if (result[0].label=="angry") {
document.getElementById("update_emoji").innerHTML="&#128548;";
}
if (result[1].label=="happy") {
    document.getElementById("update_emoji2").innerHTML="&#128522;";
    }
    if (result[1].label=="sad") {
    document.getElementById("update_emoji2").innerHTML="&#128532;";
    }
    if (result[1].label=="angry") {
    document.getElementById("update_emoji2").innerHTML="&#128548;";
    }
}
}