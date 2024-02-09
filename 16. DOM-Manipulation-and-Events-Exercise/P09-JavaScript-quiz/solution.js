function solve() {
  let count = 0;

  const sections = [
    document.querySelector("#quizzie > section:nth-child(2)"),
    document.querySelector("#quizzie > section:nth-child(3)"),
    document.querySelector("#quizzie > section:nth-child(4)"),
    document.querySelector("#results"),
  ];

  const buttons = [
    [
      "#quizzie > section:nth-child(2) > ul > li.quiz-answer.low-value > div > p",
      button1Section1,
    ],
    [
      "#quizzie > section:nth-child(2) > ul > li.quiz-answer.high-value > div > p",
      botton2Section1,
    ],
    [
      "#quizzie > section:nth-child(3) > ul > li.quiz-answer.low-value > div > p",
      button1Section2,
    ],
    [
      "#quizzie > section:nth-child(3) > ul > li.quiz-answer.high-value > div > p",
      button2Section2,
    ],
    [
      "#quizzie > section:nth-child(4) > ul > li.quiz-answer.low-value > div > p",
      button1Section3,
    ],
    [
      "#quizzie > section:nth-child(4) > ul > li.quiz-answer.high-value > div > p",
      button2Section3,
    ],
  ];

  buttons.forEach(([selector, buttonName]) => {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener("click", () => {
        buttonName();
      });
    }
  });

  function button1Section1() {
    count++;
    sections[0].style.display = "none";
    sections[1].style.display = "block";
  }

  function botton2Section1() {
    sections[0].style.display = "none";
    sections[1].style.display = "block";
  }

  function button1Section2() {
    sections[1].style.display = "none";
    sections[2].style.display = "block";
  }

  function button2Section2() {
    count++;
    sections[1].style.display = "none";
    sections[2].style.display = "block";
  }

  function button1Section3() {
    count++;
    sections[2].style.display = "none";
    sections[3].style.display = "block";
    output();
  }

  function button2Section3() {
    sections[2].style.display = "none";
    sections[3].style.display = "block";
    output();
  }

  function output() {
    if (count === 3) {
      sections[3].querySelector("h1").textContent =
        "You are recognized as top JavaScript fan!";
    } else {
      sections[3].querySelector(
        "h1"
      ).textContent = `You have ${count} right answers`;
    }
  }
}
