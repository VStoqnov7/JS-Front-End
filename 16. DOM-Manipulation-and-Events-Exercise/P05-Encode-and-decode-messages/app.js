function encodeAndDecodeMessages() {
  let message = document.querySelector("#main > div:nth-child(1) > textarea");
  let receive = document.querySelector("#main > div:nth-child(2) > textarea");

  let buttonForMessage = document.querySelector(
    "#main > div:nth-child(1) > button"
  );

  let buttonForReadIt = document.querySelector(
    "#main > div:nth-child(2) > button"
  );

  buttonForMessage.addEventListener("click", encodeText);

  function encodeText() {
    let textToCode = message.value;
    let text = textToCode.split("").reduce(function (acc, curr) {
      let charcode = curr.charCodeAt(0) + 1;
      let letter = String.fromCharCode(charcode);
      return acc + letter;
    }, "");

    receive.value = text;
    message.value = "";
  }

  buttonForReadIt.addEventListener("click", decode);

  function decode() {
    debugger;
    let textToRead = receive.value;
    let text = textToRead.split("").reduce(function (acc, curr) {
      let charcode = curr.charCodeAt(0) - 1;
      let letter = String.fromCharCode(charcode);
      return acc + letter;
    }, "");
    receive.value = text;
  }
}
