var i = 0;
var text = 'Hi My Name is JobC, I make Website.and i like to draw :)';
var speed = 55;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewrite").innerHTML += text.charAt(i);
      i++;
        setTimeout(typeWriter, speed);
  }
}