const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function Say(text) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}

btn.addEventListener('click', async function () {
  await Say('What is your name?')
  recognition.start();
})

recognition.onstart = function () {
  console.log('Voice is activated, you can use the microphone');
};

recognition.onresult = function (event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
}