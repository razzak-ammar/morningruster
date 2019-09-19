// Not Understand Array
let notUnderstand = ['./assests/2.mp3', './assests/3.mp3'];
// Speech Recognization 
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.onstart = function () {
  let audio = new Audio('./assests/beep_assist.mp3')
  audio.play();
}

// First Instance 
document.addEventListener('DOMContentLoaded', function () {
  var audio = new Audio('./assests/hello_1.mp3')
  // audio.play();

  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    askName();
  })
});

// Or First Instance
document.querySelector('#fab-alert').addEventListener('click', function () {
  var audio = new Audio('./assests/hello_1.mp3')
  audio.play();

  audio.addEventListener('ended', function () {
    audio.currentTime = 0;
    askName();
  })

})

// Speak Audio Function
function speakAudio(name) {
  audio = new Audio(`./assests/Names/${name}.mp3`)
  audio.play();
}


// Ask Name
function askName() {
  recognition.start();

  recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    console.log(transcript);

    if (transcript.includes('Ashley')) {
      speakAudio('Ashley')
    } else if (transcript.includes('Omar' || 'Ammar')) {
      speakAudio('Ammar')
    } else if (transcript.includes('Ethan')) {
      speakAudio('Ethan')
    } else if (transcript.includes('Isaiah')) {
      speakAudio('Isaiah')
    } else if (transcript.includes('Jospeh')) {
      speakAudio('Joseph')
    } else if (transcript.includes('Maria')) {
      speakAudio('Maria')
    } else if (transcript.includes('Omar')) {
      speakAudio('Omar')
    } else if (transcript.includes('Thomas')) {
      speakAudio('Thomas')
    } else if (transcript.includes('Tom')) {
      speakAudio('Tom')
    } else if (transcript.includes('William')) {
      speakAudio('William')
    } else {
      var randomValue = notUnderstand[Math.floor(Math.random() * notUnderstand.length)];
      audio = new Audio(randomValue);
      audio.play();
    }
  }
}

// Alarm Encouragement
function alarmSpeak(name) {
  audio = new Audio(`./assests/${name}.mp3`)
  audio.play();
}

// Wake Up Array



// Timer Functionality 
function timer() {
  var sec = 6;
  var timer = window.setInterval(function () {
    document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      alarmSpeak('Get_up_idndnd')
      // var randomValue = wakeUp[Math.floor(Math.random() * wakeUp.length)];
    }
  }, 1000);
}

// Button Pressed Sleep
let sleepBtn = document.querySelector('#sleep-btn');

sleepBtn.addEventListener('click', function () {
  timer();
})