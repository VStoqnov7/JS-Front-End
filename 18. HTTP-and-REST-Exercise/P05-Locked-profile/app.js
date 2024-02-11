async function lockedProfile() {
  try {
    const URL = "http://localhost:3030/jsonstore/advanced/profiles";
    const urlFetch = await fetch(URL);

    const jsonUrl = await urlFetch.json();
    const urlArray = Object.values(jsonUrl);

    const main = document.getElementById("main");
    const template = document.querySelector(".profile");

    urlArray.forEach((element, index) => {
      const clone = template.cloneNode(true);
      if (index === 0) {
        main.innerHTML = "";
      }
      main.appendChild(clone);

      const usernameInput = clone.querySelector(`input[name=user1Username]`);
      usernameInput.value = element.username;

      const hiddenFields = clone.querySelector(".user1Username");
      hiddenFields.style.display = "none";

      const emailInput = clone.querySelector(
        `.user1Username input[name=user1Email]`
      );
      emailInput.value = element.email;

      const ageInput = clone.querySelector(
        `.user1Username input[name=user1Age]`
      );
      ageInput.value = element.age;
      ageInput.type = "email";

      const showButton = clone.querySelector(`button`);

      showButton.addEventListener("click", () => toggleHiddenFields(clone));
    });
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }

  function toggleHiddenFields(profileDiv) {
    const showMoreButton = profileDiv.querySelector("button");
    const unlockRadio = profileDiv.querySelector('input[value="unlock"]');
    const hiddenFields = profileDiv.querySelector(".user1Username");

    unlockRadio.addEventListener("click", () => {
      hiddenFields.style.display = "none";
      showMoreButton.textContent = "Show more";
    });

    if (unlockRadio.checked) {
      if (hiddenFields.style.display === "none") {
        hiddenFields.style.display = "block";
        showMoreButton.textContent = "Hide it";
      } else {
        hiddenFields.style.display = "none";
        showMoreButton.textContent = "Show more";
      }
    }
  }
}
