function lockedProfile() {
  const profileContainers = Array.from(document.querySelectorAll(".profile"));
  let count = 1;

  profileContainers.forEach((container) => {
    const showMoreButton = container.querySelector("button");
    const lockRadio = container.querySelector('input[value="lock"]');
    const unlockRadio = container.querySelector('input[value="unlock"]');
    const hiddenFields = container.querySelector(`#user${count++}HiddenFields`);

    // Remove any existing click event listeners
    showMoreButton.removeEventListener("click", toggleHiddenFields);

    // Add a new click event listener
    showMoreButton.addEventListener("click", toggleHiddenFields);

    function toggleHiddenFields() {
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

    // lockRadio.addEventListener("click", () => {
    //   hiddenFields.style.display = "none";
    //   showMoreButton.textContent = "Show more";
    // });

    unlockRadio.addEventListener("click", () => {
      hiddenFields.style.display = "none";
      showMoreButton.textContent = "Show more";
    });
  });
}
