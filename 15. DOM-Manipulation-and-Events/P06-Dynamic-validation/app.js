function validate() {
  const emailInput = document.querySelector("#email");

  emailInput.addEventListener("change", function () {
    const emailValue = emailInput.value;
    // const emailPattern = /^[A-Za-z]+@softuni\.org$/;
    const emailPattern = /[A-Za-z]+\@[A-Za-z]+\.[A-Za-z]+/;

    if (emailPattern.test(emailValue)) {
      // Valid email format
      emailInput.classList.remove("error");
    } else {
      // Invalid email format
      emailInput.classList.add("error");
    }
  });
}
