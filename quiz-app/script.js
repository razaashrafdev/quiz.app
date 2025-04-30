const questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

const htmlques = document.getElementById('ques');
const htmlopt1 = document.getElementById('opt1');
const htmlopt2 = document.getElementById('opt2');
const htmlopt3 = document.getElementById('opt3');
const getBtn = document.getElementById('btn');

let index = 0;
let score = 0;
let selectedOption = null;

// Option Select
function selectOption(btn) {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.style.backgroundColor = '#f9f9f9');

    btn.style.backgroundColor = '#e0f0ff';
    selectedOption = btn.innerText;

    getBtn.disabled = false;
}

// Load Next Question
function nextQuestion() {
    if (index > 0) {
        if (selectedOption === questions[index - 1].correctOption) {
            score++;
        }
    }

    if (index >= questions.length) {
        Swal.fire({
            title: `Quiz Ended!`,
            text: `Your score: ${score}/${questions.length}`,
            icon: "success"
        });
        getBtn.innerText = "Restart";
        getBtn.onclick = () => location.reload();
        return;
    }

    const q = questions[index];
    htmlques.innerText = `${index + 1}. ${q.question}`;
    htmlopt1.innerText = q.option1;
    htmlopt2.innerText = q.option2;
    htmlopt3.innerText = q.option3;

    document.querySelectorAll('.option').forEach(opt => {
        opt.style.backgroundColor = '#f9f9f9';
    });

    selectedOption = null;
    getBtn.disabled = true;
    getBtn.innerText = index === questions.length - 1 ? "Finish" : "Next";
    index++;
}


nextQuestion()


const display = document.getElementById("time");
  let duration = moment.duration(8, "minutes"); // total 8 minutes

  const timer = setInterval(() => {
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    duration.subtract(1, "seconds");

    if (duration.asSeconds() <= 0) {
      clearInterval(timer);
      display.textContent = "0:00";
    }
  }, 1000);