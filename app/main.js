// Speech Recognization 
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.onstart = function () {
  let audio = new Audio('./assests/beep_assist.mp3')
  audio.play();
}

// First Instance 
document.addEventListener('DOMContentLoaded', function () {
  var audio = new Audio('./assests/2.mp3')
  audio.play();

  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    askName();
  })
});

// Ask Name
function askName() {
  recognition.start();

  recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    document.body.innerHTML = transcript;
  }
}
