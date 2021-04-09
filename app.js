var uName=prompt("Please enter your name :","Sara");
if(uName!=null){
document.write("<h1>Hello "+uName+" !</h1>");
}

var color=prompt("Please choose the color red/blue:");
if(color=="red"){
document.body.style.background = "red";
}
else if(color=="blue"){
document.body.style.background = "blue";
}

var question2 = confirm("Do you want to fill the cat adoption form ?!");
if (question2 == true) {
  document.write("<p>Please Scroll down to fill it !</p>");
}
else {
  document.write("<p>Please fill it ASAP !</p>");
}