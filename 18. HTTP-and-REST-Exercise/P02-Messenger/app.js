function attachEvents() {
  let output = document.querySelector("#messages");

  let nameInput = document.querySelector(
    "#controls > div:nth-child(1) > input[type=text]"
  );

  let messageInput = document.querySelector(
    "#controls > div:nth-child(2) > input[type=text]"
  );

  let buttonSend = document.querySelector("#submit");

  buttonSend.addEventListener("click", sendMessage);

  async function sendMessage() {
    let nameToSend = nameInput.value;
    let messageToSend = messageInput.value;
    if (nameToSend.trim() === "" || messageToSend.trim() === "") {
      return;
    }
    let objectToPost = {
      method: "POST",
      body: JSON.stringify({
        author: nameToSend,
        content: messageToSend,
      }),
    };

    try {
      let post = await fetch(
        "http://localhost:3030/jsonstore/messenger/",
        objectToPost
      );

      nameInput.value = "";
      messageInput.value = "";
    } catch (error) {
      console.error(error);
    }
  }

  let buttonRefresh = document.querySelector("#refresh");
  buttonRefresh.addEventListener("click", refresh);

  async function refresh() {
    try {
      let messagesFetch = await fetch(
        "http://localhost:3030/jsonstore/messenger/"
      );
      let messagesJson = await messagesFetch.json();
      let messageArray = Object.values(messagesJson);

      output.textContent = "";

      let text = messageArray
        .map((element) => `${element.author}: ${element.content}`)
        .join("\n");

      output.textContent = text;
    } catch (error) {
      console.error(error);
    }
  }
}

attachEvents();
