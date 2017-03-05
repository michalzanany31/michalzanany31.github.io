// JavaScript Documentvar


function multiply(num1,num2) {
  var result = num1 * num2;
  return ( result);
}

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/massimo-mancini-113100.jpg') {
      myImage.setAttribute ('src','images/download.jpg');
    } else {
      myImage.setAttribute ('src','images/massimo-mancini-113100.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
