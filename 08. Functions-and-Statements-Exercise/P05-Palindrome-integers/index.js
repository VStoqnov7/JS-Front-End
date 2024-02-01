function palindrome(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index].toString();
    const reverseElement = element.split("").reverse().join("");

    if (element === reverseElement) {
      console.log(`true`);
    } else {
      console.log(`false`);
    }
  }
}
