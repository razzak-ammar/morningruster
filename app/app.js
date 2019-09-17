const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
const repeat = document.querySelector('.repeat');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('voice is activated, you can use microphone');
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  // content.textContent = transcript;
};

function askMessage() {
  const speech = new SpeechSynthesisUtterance();
  speech.text = 'What is your name?';
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

function readOutLoud(message, transcript) {
  const speech = new SpeechSynthesisUtterance();

  if (transcript.includes('hey')) {
    speech.text = 'Nice to meet you, Isaiah'
  } else {
    speech.text = 'I did not get that'
  }
}

btn.addEventListener('click', function () {
  askMessage();

  recognition.start();

  repeat.addEventListener('click', function () {
    readOutLoud();
  })
})