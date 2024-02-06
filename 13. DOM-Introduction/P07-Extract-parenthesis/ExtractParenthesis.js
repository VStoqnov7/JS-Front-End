function extract(content) {
  // const targetElement = document.getElementById(content);

  const targetElement = document.querySelector("#" + content);
  const textContent = targetElement.textContent;
  const regex = /\(([^)]+)\)/g;
  let matches = textContent.match(regex);
  const result = matches.map((match) => match.slice(1, -1));
  let text = result.join("; ");
  return text;
}
