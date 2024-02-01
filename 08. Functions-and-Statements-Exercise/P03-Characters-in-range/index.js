function characterInRange(one, two) {
  const char1 = one.charCodeAt(0);
  const char2 = two.charCodeAt(0);

  let maxChar = Math.max(char1, char2);
  let minChar = Math.min(char1, char2);

  let arr = [];

  for (let index = minChar + 1; index < maxChar; index++) {
    arr.push(String.fromCharCode(index));
  }

  console.log(arr.join(" "));
}
