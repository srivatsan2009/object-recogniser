Webcam.set({
width: 310,
height:300,
image_format:'jpg',
jpg_quality:100,
constraints:{
facingMode:"environment"
}
});

camera=document.getElementById("camera");
Webcam.attach("camera");

function takesnap() {
Webcam.snap(function (dataurl){
document.getElementById("result").innerHTML="<img id='result_image' src='"+dataurl+"'>";
})
}

console.log("ml5 version-",ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded() {
console.log("model loaded!");
}

function check() {
img=document.getElementById("result_image");
classifier.classify(img,getResult);
}
 
function getResult(error,results) {
if(error) {
console.log(error);
}
else {
console.log(results);
document.getElementById("object_name").innerHTML=results[0].label;
}
}