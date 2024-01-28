function substring(input, indexStart, indexEnd) {
  //   let newString = "";
  //   for (let index = indexStart; index <= indexEnd; index++) {
  //     newString += input[index];
  //   }
  //   console.log(newString);
  const result = input.slice(indexStart, indexStart + indexEnd);

  console.log(result);
  //   console.log(input.substring(indexStart, indexEnd + 1));
}

substring("ASentence", 1, 8);
