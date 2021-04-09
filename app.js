var uName=prompt("Please enter your name :");
if(uName!=null){
document.write("<h1>Hello "+uName+" !</h1>");
}

var question = prompt("Do you prefer white cat or black cat ?!");
while (!(question == "white" || question == "black")) {
  var question = prompt("Please enter a avalid value , white or black ?!");
}
if (question == "white") {
  var number = prompt("How many white cats do you want to print ?!");
  white();
}
else {
  var number = prompt("How many black cats do you want to print ?!");
  black();
}


function white(){
for (var i = 0; i < Number(number); i++) {
  document.write("<img src='https://petkeen.com/wp-content/uploads/2020/06/shutterstock_722595979.jpg'>");
}
}

function black() {
  for (var i = 0; i < Number(number); i++) {
    document.write("<img src='https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/4/d4/4d4438ec-0958-56b9-8832-ac1486cda4f8/5bd738d346d4f.image.jpg?resize=1200%2C960'>");
  }
}


console.log(typeof (number));


var question2 = confirm("Do you want to fill the cat adoption form ?!");
if (question2 == true) {
  document.write("<p>Please Scroll down to fill it !</p>");
}
else {
  document.write("<p>Please fill it ASAP !</p>");

}