function login(arr) {
  let username = arr.shift(0);
  let reverseUsername = username.split("").reverse().join("");

  let trying = 0;

  for (const password of arr) {
    if (reverseUsername === password) {
      console.log(`User ${username} logged in.`);
    } else {
      if (trying === 3) {
        console.log(`User ${username} blocked!`);
        return;
      }
      console.log(`Incorrect password. Try again.`);
      trying++;
    }
  }
}
