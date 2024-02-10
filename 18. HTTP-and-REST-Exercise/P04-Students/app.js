async function attachEvents() {
  let btnSubmit = document.querySelector("#submit");

  btnSubmit.addEventListener("click", submit);

  let tBody = document.querySelector("#results > tbody");

  tBody.innerHTML = "";

  let url = await fetch("http://localhost:3030/jsonstore/collections/students");

  let jsonUrl = await url.json();

  let urlArray = Object.values(jsonUrl);

  urlArray.forEach((element) => {
    let tr = document.createElement("tr");
    let thFirstName = document.createElement("th");
    thFirstName.textContent = element.firstName;
    tr.appendChild(thFirstName);

    let thLastName = document.createElement("th");
    thLastName.textContent = element.lastName;
    tr.appendChild(thLastName);

    let thFacultyNumber = document.createElement("th");
    thFacultyNumber.textContent = element.facultyNumber;
    tr.appendChild(thFacultyNumber);

    let thGrade = document.createElement("th");
    thGrade.textContent = element.grade;
    tr.appendChild(thGrade);

    tBody.appendChild(tr);
  });

  async function submit() {
    let firstName = document.querySelector(
      "#form > div.inputs > input[type=text]:nth-child(1)"
    );
    let lastName = document.querySelector(
      "#form > div.inputs > input[type=text]:nth-child(2)"
    );
    let facultyNumber = document.querySelector(
      "#form > div.inputs > input[type=text]:nth-child(3)"
    );
    let grade = document.querySelector(
      "#form > div.inputs > input[type=text]:nth-child(4)"
    );

    if (
      firstName.value.trim() === "" ||
      lastName.value.trim() === "" ||
      facultyNumber.value.trim === "" ||
      grade.value.trim() === ""
    ) {
      return;
    }

    let object = {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        facultyNumber: facultyNumber.value,
        grade: grade.value,
      }),
    };

    let url = await fetch(
      "http://localhost:3030/jsonstore/collections/students",
      object
    );
    window.location.reload();
  }
}

attachEvents();
