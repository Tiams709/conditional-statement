// function checkaddress() {
//     var text = document.getElementById("inputaddress").value
//     var lower = text.toLowerCase()
//     console.log(lower)
// }
// function writeword() {
//     var text = document.getElementById("inputword").value

//     var job = text.replace(/[\s]/gm, "")
//     console.log(job)
// 
function moll() {
    var text = document.getElementById("enterpassword")
    if ((/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/gm) .test(text)) {
        console.log("correcttttt");
        
    } else {
        console.log("incorrecttttt");
        
    }
}
function bib() {
   var num = document.getElementById("enteritem").value
   if (num%2==0) {
    console.log("you are eligible for the discount")
   } else{
    console.log("buy one more")
   }
}
function tif() {
    var input =document.getElementById("temp").value
    if (input <19){
        console.log("cold")
    }  else if (input >= 20 && input <=28){
        console.log("warm")
    } else if (input > 28) {
        console.log("hot")
    }
}
function gig(){
    var weight =document.getElementById("degree").value
    var height =document.getElementById("hei").value
    var BMI = weight / (height*height)
    console.log(BMI + "kg/m^2")
    if (BMI <20) {
        console.log("underweight")
    } else if (BMI > 50 && BMI <70) {
        console.log("normal")
    } else if (BMI >100) {
        console.log("overweight")
    }
}
function gi(){
    var game1 =document.getElementById("game").value
    var replace = /^[a-za-z0-9]+$/gm
    console.log(RegExp.test(replace))
}
function ti() {
    var weight =document.getElementById("weight").value
    console.log( weight + 'kg')
    if (weight <20) {
        console.log("underweight")
    } else if (weight >=20 && weight <=30) {
        console.log("allowed")
    } else if (weight > 30){
        console.log("overweight")
    }
}