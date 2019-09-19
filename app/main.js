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

// Catch Alarm
document.querySelector('#setAlarm').addEventListener('click', function () {
  let AlarmValue = document.querySelector('#time-picker').value;

  if (AlarmValue === '') {
    alert('Fix your alarm')
  } else {
    Alarm(AlarmValue);
  }

});

// First Wake Up
function firstWake() {
  audio = new Audio(`./assests/Get_up_rogers.mp3`)
  audio.play();
  audio.addEventListener('ended', function () {
    newAudio = new Audio('./assests/How_did_you_sleep_1.mp3');
    newAudio.play();

    newAudio.addEventListener('ended', function () {
      recognition.start();
      recognition.onresult = function (event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;

        if (transcript.includes('good' || 'great' || 'really well' || 'amazing')) {
          greatAudio = new Audio('./assests/Positive.mp3');
          greatAudio.play();
        } else {
          var randomValue = notUnderstand[Math.floor(Math.random() * notUnderstand.length)];
          audio = new Audio(randomValue);
          audio.play();
        }
      }
    })
  }
  )
}

document.getElementById('goesoff').addEventListener('click', function () {
  firstWake();
})

// Alarm
// Set the date we're counting down to
function Alarm(AlarmValue) {
  var countDownDate = new Date(`${AlarmValue}`).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timeRemain").innerHTML = "Time Remaining: " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      firstWake();
      console.log('Finished')
      clearInterval(x);
    }
  }, 1000);
}