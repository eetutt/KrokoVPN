const questions = [
  {
    statement:
      "IPSec VPN -yhteyksissä voidaan käyttää joko AH- tai ESP-moduulia, mutta käytännössä ESP on yleisempi, koska se mahdollistaa sekä salauksen että autentikoinnin.",
    answer: true,
  },
  {
    statement:
      "SSL VPN -ratkaisut vaativat aina erillisen asiakasohjelman VPN-yhteyden muodostamiseksi selaimen ulkopuolella.",
    answer: false,
  },
  {
    statement:
      "OpenVPN on avoimen lähdekoodin VPN-ratkaisu, joka tukee sekä UDP- että TCP-protokollia, ja sitä käytetään laajalti vahvan salauksen vuoksi.",
    answer: true,
  },
  {
    statement:
      "WireGuard on moderni VPN-protokolla, joka hyödyntää yksinkertaistettua kryptografiaa, mikä tekee siitä kevyemmän ja nopeamman kuin perinteiset IPSec-ratkaisut.",
    answer: true,
  },
  {
    statement:
      "VPN-palveluiden 'no-log' -politiikka tarkoittaa, että palvelin tallentaa kaikki käyttäjän yhteyksiin liittyvät tiedot turvallisuussyistä.",
    answer: false,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");

// Näyttää seuraavan kysymyksen
function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionEl.innerText = questions[currentQuestionIndex].statement;
    feedbackEl.innerText = "";
  } else {
    questionEl.innerText = "Peli ohi! Lopullinen pistemäärä: " + score;
    trueBtn.style.display = "none";
    falseBtn.style.display = "none";
    feedbackEl.innerText = "";
  }
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  if (userAnswer === currentQuestion.answer) {
    // === on strict equality, parempi
    feedbackEl.innerText = "Oikein!";
    score++;
  } else {
    feedbackEl.innerText =
      "Väärin! Oikea vastaus oli " +
      (currentQuestion.answer ? "Totta" : "Tarua") +
      ".";
  }
  scoreEl.innerText = score;

  setTimeout(() => {
    currentQuestionIndex++;
    showQuestion();
  }, 2000);
}

// Tapahtumankuuntelijat
trueBtn.addEventListener("click", () => {
  checkAnswer(true);
});

falseBtn.addEventListener("click", () => {
  checkAnswer(false);
});

showQuestion();
